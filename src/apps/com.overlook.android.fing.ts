import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.overlook.android.fing',
  name: 'Fing',
  groups: [
    {
      key: 0,
      name: '功能类-教程弹窗',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: '[text="關閉"]',
      snapshotUrls: 'https://i.gkd.li/i/15521827',
    },
  ],
});
