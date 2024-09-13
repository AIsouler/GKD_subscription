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
          matches:
            '[text^="开启定位权限"] +2 [vid="fl_close"] > [vid="img_close"]',
          exampleUrls: 'https://e.gkd.li/95c8443e-babc-4d96-a3cd-00692c2acf30',
          snapshotUrls: 'https://i.gkd.li/i/16987292',
        },
      ],
    },
  ],
});
