import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuangxiangciweimao.novel',
  name: '刺猬猫阅读',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      actionMaximum: 1,
      order: -10,
      matchTime: 15000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text^="跳过"][text.length<=5]'],
          snapshotUrls: ['https://i.gkd.li/i/16893223'],
        },
      ],
    },
  ],
});
