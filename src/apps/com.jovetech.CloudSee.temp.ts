import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jovetech.CloudSee.temp',
  name: '云视通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jovision.saas.ui.activity.splash.SplashActivity',
      rules:
        '[id="com.jovetech.CloudSee.temp:id/splash_container"] >2 [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12829886',
    },
  ],
});
