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
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4bae84e9-357a-4cc9-a38b-c6949f5753cd',
          snapshotUrls: 'https://i.gkd.li/i/20903066',
        },
        {
          key: 1,
          position: {
            left: 'width * 0.8759',
            top: 'width * 2.0519',
          },
          excludeMatches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          matches: '[desc="广告素材"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/375bf789-95f6-4646-b433-3d3b25dda58a',
          snapshotUrls: 'https://i.gkd.li/i/16896514',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20903066',
        },
      ],
    },
  ],
});
