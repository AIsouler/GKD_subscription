import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmstop.shaoxing',
  name: '越牛新闻',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '[id="com.cmstop.shaoxing:id/roundProgressBar"]',
      snapshotUrls: 'https://i.gkd.li/i/13611775',
    },
  ],
});
