import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.black.unique',
  name: '全球购骑士特权',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13499535',
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      quickFind: true,
      activityIds: 'com.black.unique.feature.home.HomeActivity',
      rules: [
        {
          matches: '@ImageView[id="com.black.unique:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13499502',
        },
      ],
    },
  ],
});
