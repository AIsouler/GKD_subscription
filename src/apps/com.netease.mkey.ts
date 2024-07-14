import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mkey',
  name: '网易将军令',
  groups: [
    {
      key: 2,
      name: '功能类-一键迁移至新版将军令',
      matchTime: 10000,
      fastQuery: true,
      activityIds: 'com.netease.mkey.activity.NtSecActivity',
      rules: '[id="com.netease.mkey:id/tv_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/13421302',
    },
  ],
});
