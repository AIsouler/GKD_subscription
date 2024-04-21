import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxbc.mxsa',
  name: '蜜雪冰城',
  groups: [
    {
      key: 2,
      name: '全屏广告-主界面弹窗广告',
      activityIds: ['com.mxbc.mxsa.modules.main.MainActivity'],
      rules: [
        {
          key: 1,
          matches: '[id="com.mxbc.mxsa:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/12929345',
        },
      ],
    },
  ],
});
