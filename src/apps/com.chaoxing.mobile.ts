import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  groups: [
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.ui.MainTabActivity',
          matches: '[id="com.chaoxing.mobile:id/vNotificationItemClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13197374',
        },
      ],
    },
  ],
});
