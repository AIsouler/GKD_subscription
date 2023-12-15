import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      matchTime: 15000,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[id="com.sfacg:id/tv_jump"]',
          snapshotUrls: 'https://i.gkd.li/import/13185579',
        },
        {
          matches: '[id$="tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13644814',
        },
      ],
    },
  ],
});
