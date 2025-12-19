import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.binance.dev',
  name: '币安',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.eaas.launcher.activities.main.MainActivity',
          matches: '@[clickable=true] + [vid="tv_title"][text="发现新版本"]',
          exampleUrls: 'https://e.gkd.li/3ebed425-8801-4d70-9bcf-5c9fa61890ca',
          snapshotUrls: 'https://i.gkd.li/i/24257907',
        },
      ],
    },
  ],
});
