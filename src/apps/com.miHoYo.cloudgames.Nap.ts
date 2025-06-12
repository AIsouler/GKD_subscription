import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.Nap',
  name: '云·绝区零',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击[使用流量进行游戏]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          matches:
            '[text="使用流量进行游戏" || text="继续使用移动网络"][visibleToUser=true]',
          exampleUrls: [
            'https://e.gkd.li/6936d19b-bd2a-46d4-8284-93f0b2238359',
            'https://e.gkd.li/f1d57678-ce9a-4384-b7ea-077e55b2aa49',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/20705751',
            'https://i.gkd.li/i/20705824',
          ],
        },
      ],
    },
  ],
});
