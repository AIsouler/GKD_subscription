import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qh.tesla',
  name: '巧虎官方',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qh.tesla.splash.SplashActivity',
      rules: '[id="com.qh.tesla:id/ad_timer"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12740377',
    },
  ],
});
