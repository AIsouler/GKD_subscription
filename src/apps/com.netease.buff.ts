import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.buff',
  name: 'BUFF',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text="暂不更新"]',
      snapshotUrls: 'https://i.gkd.li/i/13310265',
    },
  ],
});
