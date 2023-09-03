import path from 'node:path';
import url from 'node:url';
import picocolors from 'picocolors';
import { walk } from './file';
import type { AppConfig, AppConfigMudule, SubscriptionConfig } from './types';

const apps: AppConfig[] = [];
for await (const tsFp of walk(process.cwd() + '/src/apps')) {
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
const subsConfig: SubscriptionConfig = {
  id: 0,
  name: `默认订阅`,
  author: `lisonge`,
  supportUri: `https://github.com/gkd-kit/subscription`,
  apps,
};

export default subsConfig;
