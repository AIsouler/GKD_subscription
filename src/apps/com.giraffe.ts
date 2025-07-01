import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.giraffe',
  name: '安易加速器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.speed.shadowsocks.ui.main.MainActivity',
          matches: '[id="com.giraffe:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14000409',
        },
      ],
    },
  ],
});
