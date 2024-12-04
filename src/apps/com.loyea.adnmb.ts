import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.loyea.adnmb',
  name: '蓝岛',
  groups: [
    {
      key: 5,
      name: '通知提示-通知弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[text="不再显示该条通知"][checked=false]',
          exampleUrls: 'https://e.gkd.li/81cc5b1b-d0a6-44e9-be99-7897cceb491a',
          snapshotUrls: 'https://i.gkd.li/i/13623450',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="确定"]',
          exampleUrls: 'https://e.gkd.li/81cc5b1b-d0a6-44e9-be99-7897cceb491a',
          snapshotUrls: 'https://i.gkd.li/i/13623450',
        },
      ],
    },
  ],
});
