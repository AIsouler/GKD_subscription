import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qooapp.qoohelper',
  name: 'QooApp',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qooapp.qoohelper.arch.welcome.WelcomeActivity',
      rules: '[id="com.qooapp.qoohelper:id/skipTv"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12843901',
    },
  ],
});
