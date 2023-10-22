import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ygkj.chelaile.standard',
  name: '车来了',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'dev.xesam.chelaile.app.module.func.SplashActivity',
      matchLauncher: true,
      rules: '[id="com.ygkj.chelaile.standard:id/cll_splash_ad_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/13062992',
    },
    {
      key: 1,
      name: '应用内广告卡片',
      activityIds: 'dev.xesam.chelaile.app.module.func.SplashActivity',
      rules:
        'ImageView[id^="com.ygkj.chelaile.standard:id/cll_all_pic_close"][visibleToUser=true]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/13062991',
        'https://gkd-kit.songe.li/import/13062984',
      ],
    },
  ],
});
