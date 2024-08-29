import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.readunion.ireader',
  name: '息壤阅读',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.union.modulehome.ui.MainActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8192872f-b071-450b-aea7-ec3ce62fee95',
          snapshotUrls: 'https://i.gkd.li/i/16790805',
        },
      ],
    },
  ],
});
