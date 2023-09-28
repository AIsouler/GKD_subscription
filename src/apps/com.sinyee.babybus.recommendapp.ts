import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sinyee.babybus.recommendapp',
  name: '宝宝巴士',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.sinyee.babybus.recommendapp.SplashActivity',
      rules:
        '[id="com.sinyee.babybus.recommendapp:id/splash_fl_ad_container"] >n [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740356',
    },
  ],
});
