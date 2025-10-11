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
  ],
});
