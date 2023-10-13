import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jovetech.CloudSee.temp',
  name: '云视通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.jovision.saas.ui.activity.splash.SplashActivity',
      rules:
        '[id="com.jovetech.CloudSee.temp:id/splash_container"] >n [text^="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12829886',
        'https://gkd-kit.songe.li/import/12893553',
      ],
    },
  ],
});
