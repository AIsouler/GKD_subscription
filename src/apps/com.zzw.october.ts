import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zzw.october',
  name: '志愿汇',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches:
            '[id="com.zzw.october:id/interact_ad_root"] >n ImageView[id="com.zzw.october:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12842675',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2033b8e2-8234-486d-ba8a-e7d140215d88',
          snapshotUrls: 'https://i.gkd.li/i/18235996',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="dialog_de"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f80b0ecb-a704-495d-9afc-c1ffcba2108f',
          snapshotUrls: 'https://i.gkd.li/i/19485921',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-志愿者保险提示弹窗',
      desc: '点击[暂不领取]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[text="暂不领取"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fe4b163a-bb6c-4337-b095-4bdf1219e9b2',
          snapshotUrls: 'https://i.gkd.li/i/19485920',
        },
      ],
    },
  ],
});
