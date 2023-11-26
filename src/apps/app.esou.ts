import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'app.esou',
  name: '闪电侠',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[id$="tt_splash_skip_btn"] + [id$="tt_splash_ad_logo"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13187789',
        'https://i.gkd.li/import/13459241',
      ],
    },
  ],
});
