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

  const sortKeys: (keyof SubscriptionConfig)[] = [
    `id`,
    `name`,
    `version`,
    `author`,
    'supportUrl',
    `updateUrl`,
    `apps`,
  ];
  const newKeys = Object.keys(newConfig) as (keyof SubscriptionConfig)[];
  if (newKeys.some((s) => !sortKeys.includes(s))) {
    console.log({
      sortKeys,
      newKeys,
    });
    throw new Error(`sortKeys miss some new key`);
  }
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
