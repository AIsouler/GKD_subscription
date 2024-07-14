import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.ys',
  name: '云·原神',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击[使用流量进行游戏]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          matches: '[text="使用流量进行游戏"]',
          exampleUrls:
            'https://m.gkd.li/57941037/84c18536-b3a4-4f6e-99b2-264c1a36beb5',
          snapshotUrls: 'https://i.gkd.li/i/14783168',
        },
      ],
    },
  ],
});
