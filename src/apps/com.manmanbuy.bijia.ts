import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.manmanbuy.bijia',
  name: '慢慢买',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text^="关闭"][text.length=4]',
          snapshotUrls: 'https://i.gkd.li/i/13214974',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-从剪贴板查历史价-拒绝',
      desc: '点击[默默拒绝]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@[clickable=true] > [text="默默拒绝"]',
          exampleUrls: 'https://e.gkd.li/73a7e5bb-35e1-4025-bfca-8f2714d1a58a',
          snapshotUrls: 'https://i.gkd.li/i/25073813',
        },
      ],
    },
  ],
});
