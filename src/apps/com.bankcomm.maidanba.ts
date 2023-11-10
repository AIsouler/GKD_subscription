import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bankcomm.maidanba',
  name: '买单吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.bankcomm.maidanba.activity.SplashActivity',
      rules: '[id="com.bankcomm.maidanba:id/ll_ad_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12660986',
    },
  ],
});
