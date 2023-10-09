import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.realtech.adscope.SplashActivity',
      rules:
        '[id = "com.realtech.xiaocan:id/splash_ad_container"] [text ^= "跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12843368',
    },
  ],
});
