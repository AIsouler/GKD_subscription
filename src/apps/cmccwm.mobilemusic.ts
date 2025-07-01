import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmccwm.mobilemusic',
  name: '咪咕音乐',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          activityIds: '.ui.base.MainActivity',
          matches: '[text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13448898',
        },
      ],
    },
  ],
});
