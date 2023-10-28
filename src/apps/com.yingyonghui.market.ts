import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yingyonghui.market',
  name: '应用汇',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id = "com.yingyonghui.market:id/splashAdvert_skipText"]',
      snapshotUrls: 'https://i.gkd.li/import/13196213',
    },
  ],
});
