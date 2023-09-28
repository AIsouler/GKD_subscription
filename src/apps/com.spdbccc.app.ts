import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.spdbccc.app',
  name: '浦大喜奔',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.spdbccc.app.sp.splash.activity.SplashActivity',
      rules: '[id="com.spdbccc.app:id/tv_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740270',
    },
  ],
});
