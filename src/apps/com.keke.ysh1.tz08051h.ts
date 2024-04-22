import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.keke.ysh1.tz08051h',
  name: '可可影视',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.salmon.film.main.ui.MainActivity',
      rules: [
        {
          key: 1,
          matches: '[text="朕知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/13548412',
        },
      ],
    },
  ],
});
