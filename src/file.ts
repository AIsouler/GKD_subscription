import _ from 'lodash';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parseSelector } from './selector';
import type { AppConfig, IArray, SubscriptionConfig } from './types';

const iArrayToArray = <T>(array: IArray<T> = []): T[] => {
  return Array<T>().concat(array);
};

const sortKeys: (keyof SubscriptionConfig)[] = [
  'id',
  'name',
  'version',
  'author',
  'supportUri',
  'updateUrl',
  'apps',
];

export const writeConfig = async (fp: string, config: SubscriptionConfig) => {
  const oldConfig: SubscriptionConfig = JSON.parse(
    await fs.readFile(fp, 'utf-8').catch(() => '{}'),
  );

  const newConfig: SubscriptionConfig = {
    ...config,
    version: oldConfig.version || 0,
  };
  newConfig.version = oldConfig.version || 0;
  checkConfig(newConfig);

  // update md
  await updateReadMeMd(newConfig);
  console.log('更新文档');

  if (_.isEqual(newConfig, oldConfig)) {
    console.log('没有检测到规则变化,跳过更新');
    return;
  }
  newConfig.version++;

  // keep json key sort by map
  const map = new Map<string, unknown>();
  sortKeys.forEach((k) => {
    if (newConfig[k] === undefined) return;
    map.set(k, newConfig[k]);
  });
  const buffer = Buffer.from(
    JSON.stringify(Object.fromEntries(map.entries())),
    'utf-8',
  );
  await fs.writeFile(fp, buffer);

  console.log(
    `更新订阅: 版本:${newConfig.version}, 文件大小: ${
      (buffer.length / 1024).toFixed(3) + 'KB'
    }`,
  );
};

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

export const validSnapshotUrl = (s: string) => {
  const u = new URL(s);
  return u.pathname.startsWith('/import/');
};

export const checkConfig = (newConfig: SubscriptionConfig) => {
  // check duplicated group key
  newConfig.apps?.forEach((app) => {
    const keys = new Set<number>();
    app.groups?.forEach((g) => {
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

      // check duplicated rule key
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
    });
  });

  // check slector syntax
  newConfig.apps?.forEach((app) => {
    app.groups?.forEach((g) => {
      if (!g.rules) return;
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
    });
  });

  // check snapshotUrls
  newConfig.apps?.forEach((app) => {
    app.groups?.forEach((g) => {
      iArrayToArray(g.snapshotUrls).forEach((u) => {
        if (!validSnapshotUrl(u)) {
          console.error({
            appId: app.id,
            groupKey: g.key,
          });
          throw new Error(
            `invalid snapshotUrls: ${u}\nit should like https://gkd-kit.gitee.io/import/12506571`,
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
              `invalid snapshotUrls: ${u}\nit should like https://gkd-kit.gitee.io/import/12506571`,
            );
          }
        });
      });
    });
  });
  const newKeys = Object.keys(newConfig) as (keyof SubscriptionConfig)[];
  if (newKeys.some((s) => !sortKeys.includes(s))) {
    console.log({
      sortKeys,
      newKeys,
    });
    throw new Error('sortKeys miss some new key');
  }
};

export const updateAppMd = async (app: AppConfig) => {
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
export const updateReadMeMd = async (newConfig: SubscriptionConfig) => {
  await Promise.all(
    newConfig.apps.map(async (app) => {
      await updateAppMd(app);
    }),
  );

  const appListText =
    '| 名称 | ID | 规则组 |\n| - | - | - |\n' +
    newConfig.apps
      .map((app) => {
        const groups = app.groups || [];
        const diabledSize = _.sumBy(groups, (g) =>
          g.enable === false ? 1 : 0,
        );

        return `| ${app.name} | [${app.id}](/docs/${app.id}.md) | ${
          diabledSize
            ? `${groups.length}/${
                groups.length - diabledSize
              }启用/${diabledSize}禁用`
            : groups.length
        } |`;
      })
      .join('\n');
  const mdTemplate = await fs.readFile(process.cwd() + '/Template.md', 'utf-8');
  const readMeMdText = mdTemplate
    .replace('--APP_SIZE--', newConfig.apps.length.toString())
    .replace(
      '--GROUP_SIZE--',
      newConfig.apps
        .reduce((p, c) => p + (c.groups?.length || 0), 0)
        .toString(),
    )
    .replace('--APP_LIST--', appListText);

  await fs.writeFile(process.cwd() + '/README.md', readMeMdText);
};
