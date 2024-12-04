import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hello.pet',
  name: '街猫',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text^="开启通知"] +2 [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/14622639',
        },
      ],
    },
  ],
});
