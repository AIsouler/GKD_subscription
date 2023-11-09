import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pingan.carowner',
  name: '平安好车主',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.pingan.carowner.activity.SplashActivity',
      rules: '[id="com.pingan.carowner:id/splash_time_tv"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12727845',
    },
  ],
});
