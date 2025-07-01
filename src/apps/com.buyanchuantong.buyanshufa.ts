import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.buyanchuantong.buyanshufa',
  name: '不厌书法',
  groups: [
    {
      key: 3,
      name: '功能类-功能介绍',
      desc: '点击跳过',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.buyanchuantong.buyanshufa.SplashActivity',
          matches: '[text^="点击跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13425296',
        },
      ],
    },
  ],
});
