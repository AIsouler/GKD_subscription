import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jsmcc',
  name: '中国移动江苏',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.jsmcc:id/cancelVersionTV"]',
          snapshotUrls: 'https://i.gkd.li/i/13327322',
        },
      ],
    },
  ],
});
