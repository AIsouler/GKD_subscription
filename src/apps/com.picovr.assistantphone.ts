import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.picovr.assistantphone',
  name: 'PICO',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchRoot: true, // https://github.com/AIsouler/GKD_subscription/issues/1052
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: '[vid="update_check_cancel_btn"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b63e9ce4-e333-4702-abd5-d2355f83da1f',
          snapshotUrls: 'https://i.gkd.li/i/20852432',
        },
      ],
    },
  ],
});
