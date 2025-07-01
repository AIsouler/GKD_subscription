import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.upupoo.apu.mobile',
  name: 'UPUPOO动态壁纸',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      desc: '点击"我知道了"',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[desc="青少年模式"] +3 [desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/14052188',
        },
      ],
    },
  ],
});
