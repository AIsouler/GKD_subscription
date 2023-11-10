import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pingan.lifecircle',
  name: '平安好生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.pingan.lifecircle.home.SplashActivity',
      rules: '[id="com.pingan.lifecircle:id/splash_time_tv"]',
      snapshotUrls: 'https://i.gkd.li/import/12567724',
    },
  ],
});
