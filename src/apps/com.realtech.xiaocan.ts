import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.realtech.adscope.SplashActivity',
      rules: [
        {
          matches:
            '[id = "com.realtech.xiaocan:id/splash_ad_container"] [text ^= "跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12843368',
        },
        {
          matches: '[id = "com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12854728',
        },
      ],
    },
  ],
});
