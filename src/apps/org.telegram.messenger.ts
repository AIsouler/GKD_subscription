import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.messenger',
  name: 'Telegram',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches: '[text="打开通知"] + [text*="打开 Telegram 的通知"]',
          snapshotUrls: 'https://i.gkd.li/i/22850638',
        },
      ],
    },
    {
      key: 2,
      name: '其他-添加生日提示',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches: '@ImageView[clickable=true] - * >2 [text^="添加您的生日"]',
          snapshotUrls: 'https://i.gkd.li/i/22971075',
        },
      ],
    },
  ],
});
