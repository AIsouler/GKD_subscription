import _ from 'lodash';
import fs from 'node:fs/promises';
import path from 'node:path';
import type PkgT from '../package.json';
import { parseSelector } from './selector';
import type {
  RawApp,
  RawAppGroup,
  RawGlobalGroup,
  IArray,
  RawSubscription,
} from './types';
import JSON5 from 'json5';

// 定义一个将 IArray<T> 类型转换为 T[] 类型的函数
const iArrayToArray = <T>(array: IArray<T> = []): T[] => {
  return Array<T>().concat(array);
};

// 定义一个指定 RawSubscription 属性顺序的数组
const sortKeys: (keyof RawSubscription)[] = [
  'id',
  'name',
  'version',
  'author',
  'supportUri',
  'updateUrl',
  'checkUpdateUrl',
  'globalGroups',
  'categories',
  'apps',
];

// 定义一个根据指定顺序序列化对象属性的函数
const orderdStringify = (
  obj: any,
  keys: string[],
  replacer?: (this: any, key: string, value: any) => any,
  space?: string | number,
) => {
  const map = new Map<string, unknown>();
  keys.forEach((k) => {
    if (obj[k] === undefined) return;
    map.set(k, obj[k]);
  });
  return (
    JSON.stringify(Object.fromEntries(map.entries()), replacer, space) + '\n'
  );
};

// 定义一个根据指定顺序序列化对象属性（使用 JSON5 格式）的函数
const orderdStringify5 = (
  obj: any,
  keys: string[],
  replacer?: (this: any, key: string, value: any) => any,
  space?: string | number,
) => {
  const map = new Map<string, unknown>();
  keys.forEach((k) => {
    if (obj[k] === undefined) return;
    map.set(k, obj[k]);
  });
  return (
    JSON5.stringify(Object.fromEntries(map.entries()), replacer, space) + '\n'
  );
};

// 解析 package.json 文件，并将结果赋值给 pkg 变量
const pkg: typeof PkgT = JSON.parse(
  await fs.readFile(process.cwd() + '/package.json', 'utf-8'),
);
const pkgKeys = Object.keys(pkg);

// 定义保存规则配置的文件路径和版本文件路径
const gkdFp = process.cwd() + '/dist/aoguai_gkd.json5';
const versionFp = process.cwd() + '/dist/aoguai_gkd.version.json';

// 解析已保存的规则配置，并将结果赋值给 oldConfig 变量
const oldConfig: RawSubscription = JSON5.parse(
  await fs.readFile(gkdFp, 'utf-8').catch(() => '{}'),
);

// 导出一个异步函数，用于写入新的规则配置
export const writeConfig = async (config: RawSubscription) => {
  // 创建新的配置对象，其中的版本号从旧的配置中获取，或者默认为 0
  const newConfig: RawSubscription = {
    ...config,
    version: oldConfig.version || 0,
  };
  newConfig.version = oldConfig.version || 0;
  checkConfig(newConfig); // 检查配置的有效性

  const hasUpdate = !_.isEqual(newConfig, oldConfig); // 检查是否有更新
  if (!hasUpdate) {
    console.log('暂无规则变化'); // 若无更新，则输出提示信息
    return; // 并返回
  }

  newConfig.version++; // 更新配置版本号

  // 更新 md 文件
  await updateReadMeMd(newConfig, oldConfig);

  // 更新 package.json 文件的版本号
  pkg.version = `1.${newConfig.version}.0`;
  await fs.writeFile(
    process.cwd() + '/package.json',
    orderdStringify(pkg, pkgKeys, undefined, 2),
    'utf-8',
  );

  // 更新 gkd.json 文件
  const buffer = Buffer.from(orderdStringify5(newConfig, sortKeys), 'utf-8');
  await fs.writeFile(gkdFp, buffer);

  // 更新 gkd.version.json 文件
  await fs.writeFile(
    versionFp,
    JSON.stringify(
      { id: newConfig.id, version: newConfig.version },
      undefined,
      2,
    ),
  );

  console.log(
    `更新订阅: v${newConfig.version}, 文件大小: ${
      (buffer.length / 1024).toFixed(3) + 'KB'
    }`,
  ); // 输出更新信息
};

// 导出一个异步生成器函数，用于遍历指定目录下的文件
export async function* walk(dirPath: string) {
  const pathnames = (await fs.readdir(dirPath)).map((s) =>
    path.join(dirPath, s),
  );
  while (pathnames.length > 0) {
    const pathname = pathnames.pop()!;
    const state = await fs.lstat(pathname);
    if (state.isFile()) {
      yield pathname;
    } else if (state.isDirectory()) {
      pathnames.push(
        ...(await fs.readdir(pathname)).map((s) => path.join(pathname, s)),
      );
    }
  }
}

// 导出一个函数，用于验证快照 URL 的有效性
export const validSnapshotUrl = (s: string) => {
  const u = new URL(s);
  return u.pathname.startsWith('/i/');
};

// 导出一个函数，用于检查配置的有效性
export const checkConfig = (newConfig: RawSubscription) => {
  // 检查分类是否重复
  const categories = newConfig.categories || [];
  categories.forEach((c) => {
    if (
      categories.some(
        (c2) => (c2.key == c.key || c2.name == c.name) && c2 !== c,
      )
    ) {
      console.error({
        configName: newConfig.name,
        categoryName: c.name,
        categoryKey: c.key,
      });
      throw new Error('invalid duplicated category');
    }
  });

  // 检查全局组是否存在重复
  const globalGroups = newConfig.globalGroups || [];
  globalGroups.forEach((g) => {
    if (globalGroups.some((g2) => g2.key == g.key && g2 !== g)) {
      console.error({
        configName: newConfig.name,
        groupName: g.name,
        groupKey: g.key,
      });
      throw new Error('invalid deprecated global group key');
    }
    // 检查规则选择器语法
    g.rules.forEach((r) => {
      [r.matches, r.excludeMatches]
        .map((m) => iArrayToArray(m))
        .flat()
        .forEach((selector) => {
          try {
            parseSelector(selector);
          } catch (e) {
            console.error({
              message: 'invalid selector syntax',
              groupKey: g.key,
              selector,
            });
            throw e;
          }
        });
    });
  });

  // 检查组和规则的重复键
  const apps = newConfig.apps || [];
  apps.forEach((app) => {
    const deprecatedKeys = app.deprecatedKeys || [];
    const keys = new Set<number>();
    const oldGroups = oldConfig.apps?.find((a) => a.id == app.id)?.groups || [];
    app.groups?.forEach((g) => {
      const oldGroup = oldGroups.find((og) => og.key == g.key);
      if (!oldGroup || !_.isEqual(oldGroup, g)) {
        // 检查新增/变动的规则组是否能被分类
        if (
          !categories.some(
            (c) => g.name == c.name || g.name.startsWith(c.name + '-'),
          )
        ) {
          console.error({
            configName: newConfig.name,
            appId: app.id,
            appName: app.name,
            groupName: g.name,
            groupKey: g.key,
            categories: categories.map((c) => c.name),
          });
          throw new Error(
            [
              'invalid group name, it must equal any category name or startWith categoryName + "-".',
              'example: "开屏广告" or "分段广告-朋友圈"',
            ].join('\n'),
          );
        }
      }

      if (deprecatedKeys.includes(g.key)) {
        console.error({
          configName: newConfig.name,
          appId: app.id,
          groupName: g.name,
          groupKey: g.key,
        });
        throw new Error('invalid deprecated group key');
      }
      if (keys.has(g.key)) {
        console.error({
          configName: newConfig.name,
          appId: app.id,
          groupName: g.name,
          groupKey: g.key,
        });
        throw new Error('invalid duplicated group key');
      }
      keys.add(g.key);

      // 检查重复规则键
      const ruleKeys = new Set<number>();
      iArrayToArray(g.rules).forEach((r) => {
        if (typeof r == 'object' && r.key !== undefined) {
          if (ruleKeys.has(r.key)) {
            console.error({
              configName: newConfig.name,
              appId: app.id,
              groupName: g.name,
              groupKey: g.key,
              ruleKey: r.key,
            });
            throw new Error('invalid duplicated rule key');
          }
          ruleKeys.add(r.key);
        }
      });

      // 检查规则选择器语法
      const rules = iArrayToArray(g.rules).map((r) => {
        if (typeof r == 'string') {
          return { matches: r };
        }
        return r;
      });
      rules.forEach((r) => {
        [r.matches, r.excludeMatches]
          .map((m) => iArrayToArray(m))
          .flat()
          .forEach((selector) => {
            try {
              parseSelector(selector);
            } catch (e) {
              console.error({
                message: 'invalid selector syntax',
                appId: app.id,
                groupKey: g.key,
                selector,
              });
              throw e;
            }
          });
      });

      // 检查快照 URL 的有效性
      iArrayToArray(g.snapshotUrls).forEach((u) => {
        if (!validSnapshotUrl(u)) {
          console.error({
            appId: app.id,
            groupKey: g.key,
          });
          throw new Error(
            `invalid snapshotUrls: ${u}\nit should like https://i.gkd.li/i/12506571`,
          );
        }
      });
      iArrayToArray(g.rules).forEach((r, ruleIndex) => {
        if (typeof r == 'string') return;
        iArrayToArray(r.snapshotUrls).forEach((u) => {
          if (!validSnapshotUrl(u)) {
            console.error({
              appId: app.id,
              groupKey: g.key,
              ruleIndex: ruleIndex,
              ruleKey: r.key,
            });
            throw new Error(
              `invalid snapshotUrls: ${u}\nit should like https://i.gkd.li/i/12506571`,
            );
          }
        });
      });
    });
  });

  // 检查新配置中是否包含了未在排序键中声明的属性
  const newKeys = Object.keys(newConfig) as (keyof RawSubscription)[];
  if (newKeys.some((s) => !sortKeys.includes(s))) {
    console.log({
      sortKeys,
      newKeys,
    });
    throw new Error('sortKeys miss some new key');
  }
};

// 导出一个异步函数，用于更新应用的 Markdown 文件
export const updateAppMd = async (app: RawApp) => {
  // 生成应用的 Markdown 文本内容
  const appHeadMdText = [
    `# ${app.name}`,
    `存在 ${app.groups?.length || 0} 规则组 - [${app.id}](/src/apps/${
      app.id
    }.ts)`,
  ].join('\n\n');
  const groupMdText = (app.groups || [])
    .map((group) => {
      const groupNameMdText = [
        `## ${group.name}`,
        [group.enable === false ? '默认禁用' : '', group.desc]
          .filter((s) => s)
          .join(' - '),
      ]
        .join('\n\n')
        .trim();

      const exampleUrls: string[] = [];
      exampleUrls.push(...iArrayToArray(group.exampleUrls));
      iArrayToArray(group.rules)
        .map((r) => (typeof r == 'string' ? [] : iArrayToArray(r.exampleUrls)))
        .flat()
        .forEach((u) => {
          if (u) {
            exampleUrls.push(u);
          }
        });
      const exampleMdText = exampleUrls
        .map((u, i) => {
          if (u) {
            return `- [示例-${i}](${u})`;
          }
        })
        .join('\n');

      const snapshotUrls: string[] = [];
      snapshotUrls.push(...iArrayToArray(group.snapshotUrls));
      iArrayToArray(group.rules)
        .map((r) => (typeof r == 'string' ? [] : iArrayToArray(r.snapshotUrls)))
        .flat()
        .forEach((u) => {
          if (u) {
            snapshotUrls.push(u);
          }
        });
      const snapshotMdText = snapshotUrls
        .map((u, i) => {
          if (u) {
            return `- [快照-${i}](${u})`;
          }
        })
        .join('\n');
      return [groupNameMdText, exampleMdText, snapshotMdText]
        .filter((s) => s)
        .join('\n\n')
        .trim();
    })
    .join('\n\n')
    .trim();

  const appMdText = [appHeadMdText, groupMdText].join('\n\n').trim() + '\n';
  await fs.writeFile(process.cwd() + `/docs/${app.id}.md`, appMdText, 'utf-8');
};

// 定义一个函数，用于获取应用组的变更日志
const getAppDiffLog = (
  oldGroups: RawAppGroup[] = [], // 旧应用组列表，默认为空数组
  newGroups: RawAppGroup[] = [], // 新应用组列表，默认为空数组
) => {
  // 根据旧应用组列表和新应用组列表，计算出被移除的应用组列表
  const removeGroups = oldGroups.filter(
    (og) => !newGroups.find((ng) => ng.key == og.key),
  );
  const addGroups: RawAppGroup[] = []; // 存储新增的应用组列表
  const changeGroups: RawAppGroup[] = []; // 存储变更的应用组列表
  // 遍历新应用组列表
  newGroups.forEach((ng) => {
    const oldGroup = oldGroups.find((og) => og.key == ng.key); // 查找对应的旧应用组
    if (oldGroup) {
      // 如果找到了对应的旧应用组
      if (!_.isEqual(oldGroup, ng)) {
        // 检查新旧应用组对象是否相等
        changeGroups.push(ng); // 如果不相等，则将新应用组添加到变更列表中
      }
    } else {
      // 如果未找到对应的旧应用组
      addGroups.push(ng); // 将新应用组添加到新增列表中
    }
  });
  return {
    addGroups, // 返回新增的应用组列表
    changeGroups, // 返回变更的应用组列表
    removeGroups, // 返回被移除的应用组列表
  };
};

// 定义一个函数，用于获取全局规则的变更日志
const getGlobalDiffLog = (
  oldGlobalGroups: RawGlobalGroup[] = [], // 旧全局应用组列表，默认为空数组
  newGlobalGroups: RawGlobalGroup[] = [], // 新全局应用组列表，默认为空数组
) => {
  // 根据旧全局应用组列表和新全局应用组列表，计算出被移除的全局应用组列表
  const removeGlobalGroups = oldGlobalGroups.filter(
    (og) => !newGlobalGroups.find((ng) => ng.key == og.key),
  );
  const addGlobalGroups: RawGlobalGroup[] = []; // 存储新增的全局应用组列表
  const changeGlobalGroups: RawGlobalGroup[] = []; // 存储变更的全局应用组列表
  // 遍历新全局应用组列表
  newGlobalGroups.forEach((ng) => {
    const oldGroup = oldGlobalGroups.find((og) => og.key == ng.key); // 查找对应的旧全局应用组
    if (oldGroup) {
      // 如果找到了对应的旧全局应用组
      if (!_.isEqual(oldGroup, ng)) {
        // 检查新旧全局应用组对象是否相等
        changeGlobalGroups.push(ng); // 如果不相等，则将新全局应用组添加到变更列表中
      }
    } else {
      // 如果未找到对应的旧全局应用组
      addGlobalGroups.push(ng); // 将新全局应用组添加到新增列表中
    }
  });
  return {
    addGlobalGroups, // 返回新增的全局应用组列表
    changeGlobalGroups, // 返回变更的全局应用组列表
    removeGlobalGroups, // 返回被移除的全局应用组列表
  };
};

// 定义一个类型，表示应用的变更日志
type AppDiff = {
  app: RawApp;
  addGroups: RawAppGroup[];
  changeGroups: RawAppGroup[];
  removeGroups: RawAppGroup[];
};

// 定义一个类型，表示全局规则的变更日志
type GlobalDiff = {
  addGlobalGroups: RawGlobalGroup[];
  changeGlobalGroups: RawGlobalGroup[];
  removeGlobalGroups: RawGlobalGroup[];
};

export const updateReadMeMd = async (
  newConfig: RawSubscription, // 新配置对象
  oldConfig: RawSubscription, // 旧配置对象
) => {
  let changeCount = 0; // 变更计数器，用于记录变更次数
  const appDiffs: AppDiff[] = []; // 存储应用变更日志的数组
  const globaldiffs: GlobalDiff[] = []; // 存储全局规则变更日志的数组
  const globalDiffLog = getGlobalDiffLog(
    oldConfig.globalGroups,
    newConfig.globalGroups,
  );
  if (
    globalDiffLog.addGlobalGroups.length +
      globalDiffLog.changeGlobalGroups.length +
      globalDiffLog.removeGlobalGroups.length >
    0
  ) {
    globaldiffs.push({ ...globalDiffLog }); // 将全局规则变更日志添加到数组中
  }
  // 获取应用组的变更日志，传入旧的应用组列表和新的应用组列表以及旧的全局应用组列表和新的全局应用组列表
  await Promise.all(
    newConfig.apps!.map(async (app) => {
      // 遍历新配置中的应用列表
      const oldApp = oldConfig.apps!.find((a) => a.id == app.id); // 查找旧配置中相同 ID 的应用对象
      if (oldApp && !_.isEqual(oldApp, app)) {
        // 如果找到旧应用且新旧应用对象不相等
        changeCount++; // 变更计数器加一
        await updateAppMd(app); // 调用更新应用 Markdown 文件的函数
        // 获取应用组的变更日志，传入旧的应用组列表和新的应用组列表以及旧的全局应用组列表和新的全局应用组列表
        const appDiffLog = getAppDiffLog(oldApp?.groups, app.groups);
        if (
          appDiffLog.addGroups.length +
            appDiffLog.changeGroups.length +
            appDiffLog.removeGroups.length >
          0
        ) {
          appDiffs.push({ app, ...appDiffLog }); // 将应用变更日志添加到数组中
        }
      }
    }),
  );

  if (appDiffs.length > 0 || globaldiffs.length > 0) {
    // 如果存在应用变更日志
    // 计算新增规则组数量和变动规则组数量以及移除规则组数量
    const addGroupsCount = appDiffs.reduce((p, c) => p + c.addGroups.length, 0);
    const changeGroupsCount = appDiffs.reduce(
      (p, c) => p + c.changeGroups.length,
      0,
    );
    const removeGroupsCount = appDiffs.reduce(
      (p, c) => p + c.removeGroups.length,
      0,
    );
    const addGlobalGroupsCount = globaldiffs.reduce(
      (p, c) => p + c.addGlobalGroups.length,
      0,
    );
    const changeGlobalGroupsCount = globaldiffs.reduce(
      (p, c) => p + c.changeGlobalGroups.length,
      0,
    );
    const removeGlobalGroupsCount = globaldiffs.reduce(
      (p, c) => p + c.removeGlobalGroups.length,
      0,
    );

    // 构建变更日志文本
    const changeLogText =
      [
        '# v' + newConfig.version, // 版本号标题
        [
          `更新 ${appDiffs.length} 应用`, // 更新应用数量
          addGroupsCount ? `新增 ${addGroupsCount} 规则` : '', // 新增规则组数量
          changeGroupsCount ? `变动 ${changeGroupsCount} 规则` : '', // 变动规则组数量
          removeGroupsCount ? `移除 ${removeGroupsCount} 规则` : '', // 移除规则组数量
          addGlobalGroupsCount ? `新增 ${addGlobalGroupsCount} 全局规则` : '', // 新增全局规则数量
          changeGlobalGroupsCount
            ? `变动 ${changeGlobalGroupsCount} 全局规则`
            : '', // 变动全局规则数量
          removeGlobalGroupsCount
            ? `移除 ${removeGlobalGroupsCount} 全局规则`
            : '', // 移除全局规则数量
        ]
          .filter((s) => s)
          .join(',\x20'), // 过滤空字符串并拼接成更新信息文本
        '## 更新详情', // 更新详情标题
        '|APP|新增|变动|移除|\n|-|-|-|-|\n' + // 表格标题
          appDiffs
            .map((a) =>
              [
                '',
                a.app.name,
                a.addGroups.map((g) => '<li>' + g.name).join(''), // 新增规则组列表
                a.changeGroups.map((g) => '<li>' + g.name).join(''), // 变动规则组列表
                a.removeGroups.map((g) => '<li>' + g.name).join(''), // 移除规则组列表
                '',
              ].join('|'),
            )
            .join('\n') +
          '\n\n---\n\n' + // 拼接应用变更详情信息
          '|全局规则|新增|变动|移除|\n|-|-|-|-|\n' + // 全局规则表格标题
          globaldiffs
            .map((a) =>
              [
                '',
                '-',
                a.addGlobalGroups.map((g) => '<li>' + g.name).join(''), // 新增全局规则列表
                a.changeGlobalGroups.map((g) => '<li>' + g.name).join(''), // 变动全局规则列表
                a.removeGlobalGroups.map((g) => '<li>' + g.name).join(''), // 移除全局规则列表
                '',
              ].join('|'),
            )
            .join('\n'), // 拼接全局规则变更详情信息
      ].join('\n\n') + '\n'; // 拼接变更日志文本并换行

    await fs.writeFile(process.cwd() + '/CHANGELOG.md', changeLogText); // 将变更日志写入 CHANGELOG.md 文件
  }

  if (changeCount > 0) {
    // 如果存在变更
    // 构建应用列表文本
    const appListText =
      '| 名称 | ID | 规则组 |\n| - | - | - |\n' + // 表格标题
      newConfig
        .apps!.map((app) => {
          // 遍历新配置中的应用列表
          const groups = app.groups || []; // 获取应用的规则组列表
          return `| ${app.name} | [${app.id}](/docs/${app.id}.md) | ${groups.length} |`; // 构建应用信息行
        })
        .join('\n'); // 拼接应用信息行
    const appListTemplateMd = await fs.readFile(
      process.cwd() + '/AppListTemplate.md', // 读取应用列表模板文件
      'utf-8', // 指定文件编码格式
    );
    await fs.writeFile(
      process.cwd() + '/AppList.md', // 将应用列表写入 AppList.md 文件
      appListTemplateMd.replaceAll('--APP_LIST--', appListText), // 替换应用列表模板中的占位符为应用列表内容
    );
  }

  // 构建 README 内容
  const mdTemplate = await fs.readFile(process.cwd() + '/Template.md', 'utf-8');
  const readMeMdText = mdTemplate
    .replaceAll('--APP_SIZE--', newConfig.apps!.length.toString()) // 替换应用数量占位符
    .replaceAll(
      '--GROUP_SIZE--',
      newConfig
        .apps!.reduce((p, c) => p + (c.groups?.length || 0), 0)
        .toString(), // 替换规则组数量占位符
    )
    .replaceAll('--VERSION--', (newConfig.version || 0).toString()); // 替换版本号占位符
  await fs.writeFile(process.cwd() + '/README.md', readMeMdText); // 将 README 内容写入 README.md 文件
};
