import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vivo.browser',
  name: 'vivo浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.vivo.browser.BrowserActivity',
      rules: 'TextView[clickable = true && text ^= "跳过" && text.length = 4]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12847431',
    },
  ],
});
