import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cheersedu.app',
  name: '湛庐阅读',
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
          activityIds: '.main.MainActivity',
          matches: '[id="com.cheersedu.app:id/iv_version_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13315712',
        },
      ],
    },
  ],
});
