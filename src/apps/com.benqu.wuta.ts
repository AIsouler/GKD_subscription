import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.benqu.wuta',
  name: '无他相机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.benqu.wuta:id/splash_ads_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13739878',
        },
      ],
    },
  ],
});
