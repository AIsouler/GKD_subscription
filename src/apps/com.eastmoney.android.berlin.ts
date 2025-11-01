import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eastmoney.android.berlin',
  name: '东方财富',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.eastmoney.android.module.launcher.internal.home.HomeActivity',
          matches: '[id="com.eastmoney.android.berlin:id/tv_update_next_time"]',
          snapshotUrls: 'https://i.gkd.li/i/12706070',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.eastmoney.android.module.launcher.internal.home.HomeActivity',
          matches: '[vid="iv_single_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/286da57c-7a7f-4668-aea8-7cbff63e8499',
          snapshotUrls: 'https://i.gkd.li/i/23281792',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.eastmoney.android.module.launcher.internal.home.HomeActivity',
          matches:
            '[id="com.eastmoney.android.berlin:id/push_on_notify_delete"]',
          snapshotUrls: 'https://i.gkd.li/i/12706065',
        },
      ],
    },
  ],
});
