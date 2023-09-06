import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.smzdm.client.android.app.WelComeActivity',
      rules: '[id="com.smzdm.client.android:id/tv_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12535072',
    },
  ],
});
