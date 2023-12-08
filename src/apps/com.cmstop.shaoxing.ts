import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cmstop.shaoxing',
  name: '越牛新闻',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: '[id="com.cmstop.shaoxing:id/roundProgressBar"]',
      snapshotUrls: 'https://i.gkd.li/import/13611775',
    },
  ],
});
