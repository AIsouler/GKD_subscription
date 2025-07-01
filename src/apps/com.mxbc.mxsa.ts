import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxbc.mxsa',
  name: '蜜雪冰城',
  groups: [
    {
      key: 2,
      name: '全屏广告-主界面弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: 'com.mxbc.mxsa.modules.main.MainActivity',
          matches: '[id="com.mxbc.mxsa:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/12929345',
        },
      ],
    },
  ],
});
