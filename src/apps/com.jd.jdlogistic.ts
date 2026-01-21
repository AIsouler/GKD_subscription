import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jdlogistic',
  name: '京东快递',
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
          activityIds: '.flutter.HomeActivity',
          matches: '@[desc="跳过"][clickable=true] - [desc$="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/24766076',
        },
      ],
    },
  ],
});
