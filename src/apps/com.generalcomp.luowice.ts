import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.generalcomp.luowice',
  name: '镭威视云',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: [
        'com.generalcomp.luowice.activity.SplashActivity',
        'com.juanvision.modulelogin.activity.SplashActivity',
      ],
      rules: [
        {
          matches: '[text$="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/21400248',
        },
        {
          matches: '[text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/21404199',
        },
      ],
    },
  ],
});
