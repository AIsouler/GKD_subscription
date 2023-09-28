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
  ],
});
