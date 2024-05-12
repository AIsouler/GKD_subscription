import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'pansong291.xposed.quickenergy.repair',
  name: '芝麻粒',
  groups: [
    {
      key: 1,
      name: '通知提示-开屏[提示]弹窗',
      desc: '点击[我知道了]',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'pansong291.xposed.quickenergy.ui.MainActivity',
          matches: '[text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/13445477',
        },
      ],
    },
  ],
});
