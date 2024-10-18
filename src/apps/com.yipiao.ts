import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yipiao',
  name: '智行火车票',
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
            left: 'width * 0.8759',
            top: 'width * 2.0519',
          },
          matches: '[desc="广告素材"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/375bf789-95f6-4646-b433-3d3b25dda58a',
          snapshotUrls: 'https://i.gkd.li/i/16896514',
        },
      ],
    },
  ],
});
