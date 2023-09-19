import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cubic.autohome',
  name: '汽车之家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.cubic.autohome.MainActivity',
      rules: '[id="com.cubic.autohome:id/ad_splash_skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12660744',
    },
  ],
});
