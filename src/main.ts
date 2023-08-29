import { relativePath, walk, writeConfig } from './file';
import { AppConfig, AppConfigMudule } from './types';
import url from 'node:url';
import path from 'node:path';
import picocolors from 'picocolors';

const apps: AppConfig[] = [];
for await (const tsFp of walk(relativePath('./apps'))) {
  const mod: AppConfigMudule = await import(url.pathToFileURL(tsFp).href);
  const appConfig = mod.default;
  if (path.basename(tsFp, `.ts`) != appConfig.id) {
    throw new Error(
      `${picocolors.blue(
        tsFp,
      )} file basename is not equal to its app id ${picocolors.blue(
        appConfig.id,
      )} `,
    );
  }
  apps.push(appConfig);
}

// a,b,c,d
apps.sort((a, b) => (a.id > b.id ? 1 : -1));

await writeConfig(`../dist/gkd.json`, {
  id: 0,
  name: `默认订阅`,
  author: `lisonge`,
  supportUrl: `https://github.com/gkd-kit/subscription`,
  apps,
});
