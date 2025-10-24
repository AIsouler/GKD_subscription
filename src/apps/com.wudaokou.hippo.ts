import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wudaokou.hippo',
  name: '盒马',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.launcher.splash.SplashActivity',
          matches: '[vid="home_pop_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7719d496-8331-4ddd-996d-5e1b5a88d7b7',
          snapshotUrls: 'https://i.gkd.li/i/22988411',
        },
      ],
    },
  ],
});
