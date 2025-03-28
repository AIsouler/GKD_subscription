import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinarailway.globalticketing',
  name: '铁路12306',
  groups: [
    {
      key: 1,
      name: '权限提示-定位权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.MobileTicket.ui.activity.MainActivity',
          matches: ['[text^="开启定位权限"]', '[vid="img_close"]'],
          exampleUrls: 'https://e.gkd.li/95c8443e-babc-4d96-a3cd-00692c2acf30',
          snapshotUrls: 'https://i.gkd.li/i/16987292',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-关闭底部公告横幅',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.MobileTicket.ui.activity.MainActivity',
          matches: '[vid="iv_tip_close"][desc^="关闭公告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/be03fa78-7c6f-4a05-8370-93a5de9a246e',
          snapshotUrls: 'https://i.gkd.li/i/19497545',
        },
      ],
    },
  ],
});
