import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yipiao',
  name: '智行火车票',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      actionMaximum: 1,
      order: -10,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text^="跳过"][text.length<=5]'],
          snapshotUrls: ['https://i.gkd.li/i/16896514'],
        },
      ],
    },
  ],
});
