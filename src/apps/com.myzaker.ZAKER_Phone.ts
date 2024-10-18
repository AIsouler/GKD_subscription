import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.myzaker.ZAKER_Phone',
  name: 'ZAKER',
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
          position: {
            left: 'width * 0.9009',
            top: 'width * 0.075',
          },
          fastQuery: true,
          matches: '[id="com.myzaker.ZAKER_Phone:id/cover_pic"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c140267a-a48a-45a9-9303-7507aa2008e4',
          snapshotUrls: 'https://i.gkd.li/i/13694552',
        },
      ],
    },
  ],
});
