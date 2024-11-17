import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.svw.sc.mos',
  name: '上汽大众',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.main.ui.home.ui.AppStartDialogActivity',
          matches: '[vid="iv_appstart_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0acf720d-1752-449f-bbe6-357896f1bb2e',
          snapshotUrls: 'https://i.gkd.li/i/17528776',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.main.ui.MainActivity',
          matches: '[vid="clyt_floating_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fbbc311e-cfe1-468a-88c1-20633622a34e',
          snapshotUrls: 'https://i.gkd.li/i/17528781',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.ui.MainActivity',
          matches: '[vid="close_contain"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2d9042c4-0dac-47d5-9fc4-92a91da393b5',
          snapshotUrls: 'https://i.gkd.li/i/17709772',
        },
      ],
    },
  ],
});
