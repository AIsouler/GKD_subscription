import dayjs from 'dayjs';
import _ from 'lodash';
import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';
import selfPkg from '../package.json';
import type { SubscriptionConfig, IArray } from './types';
import { parseSelector } from './selector';

export const relativePath = (p: string) => {
  return url.fileURLToPath(new URL(p, import.meta.url));
};

const iArrayToArray = <T>(array: IArray<T> = []): T[] => {
  return Array<T>().concat(array);
};

const sortKeys: (keyof SubscriptionConfig)[] = [
  `id`,
  `name`,
  `version`,
  `author`,
  'supportUri',
  `updateUrl`,
  `apps`,
];

export const writeConfig = async (fp: string, config: SubscriptionConfig) => {
  const filePath = relativePath(fp);
  const newConfig: SubscriptionConfig = { ...config };
  const oldConfig: SubscriptionConfig = JSON.parse(
    await fs.readFile(filePath, 'utf-8').catch(() => `{}`),
  );

  newConfig.version = oldConfig.version ?? 0;
  if (_.isEqual(newConfig, oldConfig)) {
    console.log([oldConfig.name, `nothing changed, skip`]);
    return;
  }
  newConfig.version++;
  checkConfig(newConfig);

  // keep json key sort by map
  const map = new Map<string, unknown>();
  sortKeys.forEach((k) => {
    if (newConfig[k] === undefined) return;
    map.set(k, newConfig[k]);
  });
  const buffer = Buffer.from(
    JSON.stringify(Object.fromEntries(map.entries()), void 0, 2),
    'utf-8',
  );
  await fs.writeFile(filePath, buffer);

  const newPkg = { ...selfPkg, version: `0.0.` + newConfig.version };
  await fs.writeFile(
    relativePath('../package.json'),
    JSON.stringify(newPkg, void 0, 2) + `\n`,
  );

  await updateReadMeMd(newConfig);

  console.log({
    mtime: dayjs().format(`HH:mm:ss`),
    name: newConfig.name,
    size: (buffer.length / 1024).toFixed(3) + `KB`,
    version: newConfig.version,
  });
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
        throw new Error(`invalid duplicated group key`);
      }
      keys.add(g.key);
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
                message: `invalid selector syntax`,
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
  const newKeys = Object.keys(newConfig) as (keyof SubscriptionConfig)[];
  if (newKeys.some((s) => !sortKeys.includes(s))) {
    console.log({
      sortKeys,
      newKeys,
    });
    throw new Error(`sortKeys miss some new key`);
  }
};

export const updateReadMeMd = async (newConfig: SubscriptionConfig) => {
  const mdTemplate = await fs.readFile(relativePath('../Template.md'), 'utf-8');
  const appListText = newConfig.apps
    .map((app) => {
      const appMdText = `### [${app.id}](/src/apps/${app.id}.ts) - ${app.name}\n`;
      const groupMdText = app.groups
        ?.map((group) => {
          const groupNameMdText =
            `- ${group.name}` +
            (group.desc ? ` - ${group.desc}` : ``).trimEnd();

          const exampleUrls: string[] = [];
          exampleUrls.push(...iArrayToArray(group.exampleUrls));
          iArrayToArray(group.rules)
            .map((r) =>
              typeof r == 'string' ? [] : iArrayToArray(r.exampleUrls),
            )
            .flat()
            .forEach((u) => {
              if (u) {
                exampleUrls.push(u);
              }
            });
          const exampleMdText = exampleUrls
            .map((u, i) => {
              if (u) {
                return `  - [示例-${i}](${u})`;
              }
            })
            .join(`\n`)
            .trimEnd();

          const snapshotUrls: string[] = [];
          snapshotUrls.push(...iArrayToArray(group.snapshotUrls));
          iArrayToArray(group.rules)
            .map((r) =>
              typeof r == 'string' ? [] : iArrayToArray(r.snapshotUrls),
            )
            .flat()
            .forEach((u) => {
              if (u) {
                snapshotUrls.push(u);
              }
            });
          const snapshotMdText = snapshotUrls
            .map((u, i) => {
              if (u) {
                return `  - [快照-${i}](${u})`;
              }
            })
            .join(`\n`);
          return [groupNameMdText, exampleMdText, snapshotMdText]
            .filter((s) => s)
            .join(`\n`)
            .trimEnd();
        })
        .join(`\n`)
        .trimEnd();

      return [appMdText, groupMdText].join(`\n`).trimEnd();
    })
    .join(`\n\n`)
    .trimEnd();
  const readMeMdText = mdTemplate
    .replace(`--APP_SIZE--`, newConfig.apps.length.toString())
    .replace(
      `--GROUP_SIZE--`,
      newConfig.apps
        .reduce((p, c) => p + (c.groups?.length || 0), 0)
        .toString(),
    )
    .replace(`--APP_LIST--`, appListText);

  await fs.writeFile(relativePath(`../README.md`), readMeMdText);
};
