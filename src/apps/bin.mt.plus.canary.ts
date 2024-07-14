import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bin.mt.plus.canary',
  name: 'MT管理器Pro',
  groups: [
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'LinearLayoutCompat @[text="取消"] + [text="更新"]',
      snapshotUrls: 'https://i.gkd.li/i/13561226',
    },
  ],
});
