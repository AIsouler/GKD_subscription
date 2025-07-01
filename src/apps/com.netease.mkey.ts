import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mkey',
  name: '网易将军令',
  groups: [
    {
      key: 2,
      name: '其他-一键迁移至新版将军令',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.netease.mkey.activity.NtSecActivity',
          matches: '[id="com.netease.mkey:id/tv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13421302',
        },
      ],
    },
  ],
});
