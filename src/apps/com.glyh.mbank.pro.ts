import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.glyh.mbank.pro',
  name: '桂林银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      rules: 'TextView[id="com.glyh.mbank.pro:id/tv_countdown"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12876201',
    },
  ],
});
