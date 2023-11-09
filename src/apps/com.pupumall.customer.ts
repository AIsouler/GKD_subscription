import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pupumall.customer',
  name: '朴朴超市',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.pupumall.customer.activity.SplashActivity',
      rules: '[id="com.pupumall.customer:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12830126',
    },
  ],
});
