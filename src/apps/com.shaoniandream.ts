import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shaoniandream',
  name: '少年梦阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[id="com.shaoniandream:id/countdown"]',
          exampleUrls: 'https://e.gkd.li/080e7f84-c8ac-48b3-ba82-c1dbb795f4f6',
          snapshotUrls: 'https://i.gkd.li/i/13236791',
        },
      ],
    },
  ],
});
