import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gstarmc.android',
  name: 'CAD看图王',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="tv_skip"][text*="跳过"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24464339',
          activityIds: 'com.stone.app.ui.activity.AppSplashActivity',
        },
      ],
    },
  ],
});
