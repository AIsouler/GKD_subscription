import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.messenger.web',
  name: 'Telegram',
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
          matches: [
            '[text="更新 Telegram"]',
            '@View[clickable=true] + [text="请稍后提醒我"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13847837',
        },
      ],
    },
    {
      key: 2,
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
  ],
});
