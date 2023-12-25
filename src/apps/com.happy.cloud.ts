import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.happy.cloud',
  name: '磁力云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.e4a.runtime.android.mainActivity',

      rules: '[id="com.happy.cloud:id/splash_container"] >n [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13187851',
    },
  ],
});
