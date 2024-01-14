import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'org.telegram.messenger.web',
  name: 'Telegram',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      resetMatch: 'app',
      quickFind: true,
      actionMaximum: 1,
      rules: [
        {
          matches: ['[text="更新 Telegram"]', '[text="请稍后提醒我"] - View'],
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/13847837',
    },
  ],
});
