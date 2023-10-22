import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cqcsy.ifvod',
  name: '爱壹帆',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.cqcsy.lgsp.main.SplashActivity',
      rules: '[id="com.cqcsy.ifvod:id/skipTips"]',
      snapshotUrls: 'https://i.gkd.li/import/12793228',
    },
  ],
});
