import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dubox.drive',
  name: 'TeraBox',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: 'TextView[id="com.dubox.drive:id/tv_skip"]',
          snapshotUrls: 'https://i.gkd.li/i/13200574',
        },
        {
          key: 1,
          matches: '@[id="com.dubox.drive:id/ivClose"] - * >2 [id="inmobi-ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13688384',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: 'com.dubox.drive.ui.MainActivity',
      rules: 'ImageView[id="com.dubox.drive:id/ivClose"]',
      snapshotUrls: 'https://i.gkd.li/i/13200577',
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[text="Authorize"] - [id="com.dubox.drive:id/dialog_button_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/13688406',
    },
  ],
});
