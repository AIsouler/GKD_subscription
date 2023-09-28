import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.mico',
  name: '小爱音箱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xiaomi.mico.splash.SplashActivity',
      rules: [
        {
          matches: '[id="com.xiaomi.mico:id/splash_ad_skip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12748911',
        },
      ],
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: 'com.xiaomi.mico.main.MainActivity',
      rules:
        '[id="com.xiaomi.mico:id/adImage"] + [id="com.xiaomi.mico:id/ivCloseAd"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12745621',
    },
  ],
});
