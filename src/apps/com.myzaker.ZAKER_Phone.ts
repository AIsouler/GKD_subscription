import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.myzaker.ZAKER_Phone',
  name: 'ZAKER',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0c69945f-ac0e-44a8-a0a3-95544e53849f',
          snapshotUrls: 'https://i.gkd.li/i/20689993',
        },
        {
          key: 1,
          position: {
            left: 'width * 0.9009',
            top: 'width * 0.075',
          },
          matches: '[id="com.myzaker.ZAKER_Phone:id/cover_pic"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c140267a-a48a-45a9-9303-7507aa2008e4',
          snapshotUrls: 'https://i.gkd.li/i/13694552',
        },
      ],
    },
  ],
});
