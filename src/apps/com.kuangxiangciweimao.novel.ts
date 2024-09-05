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
        {
          activityIds: 'com.kuangxiangciweimao.novel.activity.WelcomeActivity',
          matches: 'FrameLayout +n View',
          snapshotUrls: [
            'https://i.gkd.li/i/16899063',
            'https://i.gkd.li/i/16899066',
            'https://i.gkd.li/i/16899125',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-每日签到',
      desc: '点击[签到]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.frame.MainFrameActivity',
          matches: 'Button[text="签到"]',
          snapshotUrls: 'https://i.gkd.li/i/16897712',
        },
      ],
    },
  ],
});
