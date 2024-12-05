import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingye.app',
  name: '星野',
  groups: [
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.weaver.app.MainSplashActivity',
          matches: '[vid="settingUpdateCancelTv"]',
          snapshotUrls: 'https://i.gkd.li/i/14137987',
        },
      ],
    },
  ],
});
