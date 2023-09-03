import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.koudai.weidian.buyer',
  name: '微店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.koudai.weidian.buyer.activity.SplashActivity',
      rules: '[id="com.koudai.weidian.buyer:id/skip_view"||text="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12506297',
    },
  ],
});
