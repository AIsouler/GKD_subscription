import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tt.turbo',
  name: '甜糖',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[desc="取消"] + [desc="更新"]',
          snapshotUrls: 'https://i.gkd.li/i/14292907',
        },
      ],
    },
  ],
});
