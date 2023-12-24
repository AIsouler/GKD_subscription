import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.when.coco',
  name: '365日历',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id$="tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13709379',
    },
  ],
});
