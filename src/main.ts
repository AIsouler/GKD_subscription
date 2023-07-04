import { relativePath, walk, writeConfig } from './file';
import { AppConfig, AppConfigMudule } from './types';

const apps: AppConfig[] = [];
for await (const tsFp of walk(relativePath('./apps'))) {
  const mod: AppConfigMudule = await import(`file://` + tsFp);
  apps.push(mod.default);
}
// a,b,c,d
apps.sort((a, b) => (a.id > b.id ? 1 : -1));

await writeConfig(`../dist/gkd.json`, {
  name: `GKD官方订阅`,
  author: `lisonge`,
  supportUrl: `https://github.com/lisonge/gkd-subscription`,
  apps,
});
