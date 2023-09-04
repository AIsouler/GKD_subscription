import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.ct.client.activity.MainActivity',
        'com.ct.client.activity.SplashActivity',
      ],
      rules: '[id="com.ct.client:id/tvSkip"||id="com.ct.client:id/btSkip"]',
      snapshotUrls: ['https://gkd-kit.songe.li/import/12508958'],
    },
  ],
});
