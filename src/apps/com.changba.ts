import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.changba',
  name: '唱吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          quickFind: true,
          matches: '[id="com.changba:id/ad_timer"]',
          snapshotUrls: 'https://i.gkd.li/import/13373946',
        },
      ],
    },
  ],
});
