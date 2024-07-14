import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.homework',
  name: '作业帮',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.baidu.homework.activity.index.IndexActivity',
          matches: '[vid="ad_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15374440',
        },
      ],
    },
  ],
});
