import path from 'node:path';
import url from 'node:url';
import picocolors from 'picocolors';
import { walk } from './file';
import type { RawApp, RawSubscription } from './types';
import _ from 'lodash';
import { pinyin } from 'pinyin-pro';
import globalGroups from './globalGroups';
import categories from './categories';

const apps: RawApp[] = [];
for await (const tsFp of walk(process.cwd() + '/src/apps')) {
  const mod: { default: RawApp } = await import(url.pathToFileURL(tsFp).href);
  const appConfig = mod.default;
  if (path.basename(tsFp, '.ts') != appConfig.id) {
    throw new Error(
      `${picocolors.blue(
        tsFp,
      )} file basename is not equal to its app id ${picocolors.blue(
        appConfig.id,
      )} `,
    );
  }
  appConfig.groups?.forEach((g) => {
    if (!g.name.startsWith('开屏广告')) {
      g.enable = false;
    }
  });
  apps.push(appConfig);
}

const subsConfig: RawSubscription = {
  id: 0,
  version: 0,
  name: '默认订阅',
  author: 'lisonge',
  supportUri: 'https://github.com/gkd-kit/subscription',
  checkUpdateUrl:
    'https://registry.npmmirror.com/@gkd-kit/subscription/latest/files/dist/gkd.version.json',
  globalGroups,
  categories,
  apps: _.sortBy(apps, (a) => {
    const showName = a.name || a.id;
    const pyName = pinyin(showName, {
      separator: '',
      toneType: 'none',
    });
    if (pyName === showName) return showName;
    return '\uFFFF' + pyName; // 让带拼音的全排在后面
  }),
};

export default subsConfig;
