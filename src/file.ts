import isEqual from 'lodash/isEqual';
import fs from 'node:fs/promises';
import path from 'node:path';
import type PkgT from '../package.json';
import { parseSelector } from './selector';
import { RawApp } from './types';
import {
  RawAppGroup,
  RawGlobalGroup,
  IArray,
  RawSubscription,
} from '@gkd-kit/api';
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
  const filteredEntries: [string, unknown][] = [];
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      filteredEntries.push([key, obj[key]]);
    }
  }
  return (
    JSON.stringify(Object.fromEntries(filteredEntries), replacer, space) + '\n'
  );
};

// 定义一个根据指定顺序序列化对象属性（使用 JSON5 格式）的函数
const orderdStringify5 = (
  obj: any,
  keys: string[],
  replacer?: (this: any, key: string, value: any) => any,
  space?: string | number,
) => {
  const filteredEntries: [string, unknown][] = [];
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      filteredEntries.push([key, obj[key]]);
    }
  }
  return (
    JSON5.stringify(Object.fromEntries(filteredEntries), replacer, space) + '\n'
  );
};

// 解析 package.json 文件，并将结果赋值给 pkg 变量
const pkg: typeof PkgT = JSON.parse(
  await fs.readFile(process.cwd() + '/package.json', 'utf-8'),
);
const pkgKeys = Object.keys(pkg);

// 定义保存规则配置的文件路径和版本文件路径
const gkdFp = process.cwd() + '/dist/AIsouler_gkd.json5';
const versionFp = process.cwd() + '/dist/AIsouler_gkd.version.json';

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

  const hasUpdate = !isEqual(newConfig, oldConfig); // 检查是否有更新
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
  for (const c of categories) {
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
  }

  // 检查全局组是否存在重复
  const globalGroups = newConfig.globalGroups || [];
  for (const g of globalGroups) {
    if (globalGroups.some((g2) => g2.key == g.key && g2 !== g)) {
      console.error({
        configName: newConfig.name,
        groupName: g.name,
        groupKey: g.key,
      });
      throw new Error('invalid deprecated global group key');
    }
    // 检查规则选择器语法
    for (const r of g.rules) {
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
    }
  }

  // 检查组和规则的重复键
  const apps = newConfig.apps || [];
  for (const app of apps) {
    const deprecatedKeys = (app as RawApp).deprecatedKeys || [];
    const keys = new Set<number>();
    const oldGroups = oldConfig.apps?.find((a) => a.id == app.id)?.groups || [];
    for (const g of app.groups || []) {
      const oldGroup = oldGroups.find((og) => og.key == g.key);
      if (!oldGroup || !isEqual(oldGroup, g)) {
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
      for (const r of iArrayToArray(g.rules)) {
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
      }

      // 检查规则选择器语法
      const rules = iArrayToArray(g.rules).map((r) => {
        if (typeof r == 'string') {
          return { matches: r };
        }
        return r;
      });
      for (const r of rules) {
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
      }

      // 检查快照 URL 的有效性
      for (const u of iArrayToArray(g.snapshotUrls)) {
        if (!validSnapshotUrl(u)) {
          console.error({
            appId: app.id,
            groupKey: g.key,
          });
          throw new Error(
            `invalid snapshotUrls: ${u}\nit should like https://i.gkd.li/i/12506571`,
          );
        }
      }
      for (const [ruleIndex, r] of iArrayToArray(g.rules).entries()) {
        if (typeof r == 'string') continue;
        for (const u of iArrayToArray(r.snapshotUrls)) {
          if (!validSnapshotUrl(u)) {
            console.error({
              appId: app.id,
              groupKey: g.key,
              ruleIndex,
              ruleKey: r.key,
            });
            throw new Error(
              `invalid snapshotUrls: ${u}\nit should like https://i.gkd.li/i/12506571`,
            );
          }
        }
      }
    }
  }

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
    `存在 ${app.groups?.length || 0} 规则组 - [${app.id}](/src/apps/${app.id}.ts)`,
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

// 导出一个异步函数，用于检查是否存在冗余的应用 Markdown 文件
export const checkAndDeleteFiles = async (): Promise<void> => {
  const currentDir = process.cwd();

  const docsDir = path.join(currentDir, 'docs');
  const srcAppsDir = path.join(currentDir, 'src/apps');

  try {
    const files = await fs.readdir(docsDir);

    for (const file of files) {
      if (file.endsWith('.md')) {
        const tsFileName = file.replace('.md', '.ts');
        const tsFilePath = path.join(srcAppsDir, tsFileName);

        try {
          await fs.access(tsFilePath, fs.constants.F_OK);
        } catch (error) {
          // Check if error object has code property and it's ENOENT
          if (error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
            const mdFilePath = path.join(docsDir, file);
            await fs.unlink(mdFilePath);
            console.log(`Deleted ${file}`);
          } else {
            throw error; // Propagate other errors
          }
        }
      }
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
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
      if (!isEqual(oldGroup, ng)) {
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
      if (!isEqual(oldGroup, ng)) {
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
  newConfig: RawSubscription,
  oldConfig: RawSubscription,
) => {
  let changeCount = 0;
  const appDiffs: AppDiff[] = [];
  const globaldiffs: GlobalDiff[] = [];
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
    globaldiffs.push({ ...globalDiffLog });
  }

  // 遍历新配置中的每个应用程序
  for (const app of oldConfig.apps || []) {
    // 查找新配置中具有相同 ID 的应用程序
    const newApp = newConfig.apps!.find((a) => a.id === app.id);
    // 如果在旧配置中找不到相同 ID 的应用程序
    if (!newApp) {
      // 增加变更计数
      changeCount++;
      // 更新应用程序的 Markdown 文件
      await updateAppMd(app);
      // 获取应用程序组的差异日志
      const appDiffLog = getAppDiffLog(app.groups, []);
      // 如果有新增、修改或删除的组，则将其记录到应用程序差异中
      if (
        appDiffLog.addGroups.length +
          appDiffLog.changeGroups.length +
          appDiffLog.removeGroups.length >
        0
      ) {
        appDiffs.push({ app, ...appDiffLog });
      }
    } else if (!isEqual(newApp, app)) {
      // 如果旧应用程序与新应用程序不相等
      // 增加变更计数
      changeCount++;
      // 更新应用程序的 Markdown 文件
      await updateAppMd(app);
      // 获取应用程序组的差异日志
      const appDiffLog = getAppDiffLog(app.groups, newApp.groups);
      // 如果有新增、修改或删除的组，则将其记录到应用程序差异中
      if (
        appDiffLog.addGroups.length +
          appDiffLog.changeGroups.length +
          appDiffLog.removeGroups.length >
        0
      ) {
        appDiffs.push({ app, ...appDiffLog });
      }
    }
  }

  if (appDiffs.length > 0 || globaldiffs.length > 0) {
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

    const changeLogText =
      [
        `# v${newConfig.version}`,
        [
          `更新 ${appDiffs.length} 应用`,
          addGroupsCount ? `新增 ${addGroupsCount} 规则` : '',
          changeGroupsCount ? `变动 ${changeGroupsCount} 规则` : '',
          removeGroupsCount ? `移除 ${removeGroupsCount} 规则` : '',
          addGlobalGroupsCount ? `新增 ${addGlobalGroupsCount} 全局规则` : '',
          changeGlobalGroupsCount
            ? `变动 ${changeGlobalGroupsCount} 全局规则`
            : '',
          removeGlobalGroupsCount
            ? `移除 ${removeGlobalGroupsCount} 全局规则`
            : '',
        ]
          .filter((s) => s)
          .join(', '),
        '## 更新详情',
        '|APP|新增|变动|移除|\n|-|-|-|-|\n' +
          appDiffs
            .map((a) =>
              [
                '',
                a.app.name,
                a.addGroups.map((g) => '<li>' + g.name).join(''),
                a.changeGroups.map((g) => '<li>' + g.name).join(''),
                a.removeGroups.map((g) => '<li>' + g.name).join(''),
                '',
              ].join('|'),
            )
            .join('\n') +
          '\n\n---\n\n' +
          '|全局规则|新增|变动|移除|\n|-|-|-|-|\n' +
          globaldiffs
            .map((a) =>
              [
                '',
                '-',
                a.addGlobalGroups.map((g) => '<li>' + g.name).join(''),
                a.changeGlobalGroups.map((g) => '<li>' + g.name).join(''),
                a.removeGlobalGroups.map((g) => '<li>' + g.name).join(''),
                '',
              ].join('|'),
            )
            .join('\n'),
      ].join('\n\n') + '\n';

    await fs.writeFile(process.cwd() + '/CHANGELOG.md', changeLogText);
    await checkAndDeleteFiles();
  }

  if (changeCount > 0) {
    const appListText =
      [
        `## 应用规则(共 ${newConfig.apps!.length.toString()} 组)\n\n| 名称 | ID | 规则组 |\n| - | - | - |\n` +
          newConfig
            .apps!.map((app) => {
              const groups = app.groups || [];
              return `| ${app.name} | [${app.id}](/docs/${app.id}.md) | ${groups.length} |`;
            })
            .join('\n') +
          '\n\n---\n\n' +
          `## 全局规则(共 ${newConfig.globalGroups!.length.toString()} 组)\n\n| 全局规则 | 名称 | 规则组 |\n| - | - | - |\n` +
          newConfig
            .globalGroups!.map((a) => {
              return `| 全局规则 | ${a.name} | ${a.rules.length} |`;
            })
            .join('\n'),
      ].join('\n\n') + '\n';

    const appListTemplateMd = await fs.readFile(
      process.cwd() + '/AppListTemplate.md',
      'utf-8',
    );
    await fs.writeFile(
      process.cwd() + '/AppList.md',
      appListTemplateMd.replaceAll('--APP_LIST--', appListText),
    );
  }

  const mdTemplate = await fs.readFile(process.cwd() + '/Template.md', 'utf-8');
  const readMeMdText = mdTemplate
    .replaceAll('--APP_SIZE--', newConfig.apps!.length.toString())
    .replaceAll(
      '--GROUP_SIZE--',
      newConfig
        .apps!.reduce((p, c) => p + (c.groups?.length || 0), 0)
        .toString(),
    )
    .replaceAll(
      '--GLOBALGROUP_SIZE--',
      newConfig
        .globalGroups!.reduce((p, c) => p + (c.rules?.length || 0), 0)
        .toString(),
    )
    .replaceAll('--VERSION--', (newConfig.version || 0).toString());
  await fs.writeFile(process.cwd() + '/README.md', readMeMdText);
};
