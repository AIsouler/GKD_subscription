import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.benew.ntt',
  name: '牛听听',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.benew.ntt.AdActivity',
      rules: '[id="com.benew.ntt:id/ad_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740387',
    },
  ],
});
