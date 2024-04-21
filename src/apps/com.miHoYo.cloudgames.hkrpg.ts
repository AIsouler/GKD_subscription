import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.hkrpg',
  name: '云·星穹铁道',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击[使用流量进行游戏]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          matches: '[text="使用流量进行游戏"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f33b53ea-32a2-48b3-a4a8-54bfa8b1fdd8',
          snapshotUrls: 'https://i.gkd.li/i/14784161',
        },
      ],
    },
  ],
});
