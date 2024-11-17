import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shanghaionstar',
  name: '安吉星',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '[id="com.shanghaionstar:id/jump_view"]',
      snapshotUrls: 'https://i.gkd.li/i/13071523',
    },
  ],
});
