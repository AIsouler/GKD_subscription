import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.umetrip.android.msky.app.module.startup.SplashActivity',
      rules: '[id="com.umetrip.android.msky.app:id/tv_jump"][text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642287',
    },
  ],
});
