import _ from 'lodash';
import path from 'node:path';
import url from 'node:url';
import picocolors from 'picocolors';
import { pinyin } from 'pinyin-pro';
import { walk } from './file';
import { RawApp } from './types';
import { OPEN_AD_ORDER } from './utils';

const rawApps: RawApp[] = [];
for await (const tsFp of walk(process.cwd() + '/src/apps')) {
  if (!tsFp.endsWith('.ts')) {
    throw new Error('invalid typescript app config file: ' + tsFp);
  }
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
  delete appConfig.deprecatedKeys;
  appConfig.groups?.forEach((g) => {
    if (!g.name.startsWith('开屏广告')) {
      g.enable = false;
    } else {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
}

const apps = _.sortBy(rawApps, (a) => {
  const showName = a.name || a.id;
  const pyName = pinyin(showName, {
    separator: '',
    toneType: 'none',
  });
  if (pyName === showName) return showName;
  return '\uFFFF' + pyName; // 让带拼音的全排在后面
});
export default apps;
