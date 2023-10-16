import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youloft.icloser',
  name: '心动日常',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.youloft.icloser.splash.AdSplashActivity',
      matchLauncher: true,
      rules:
        '[id="com.youloft.icloser:id/sdk_container"] TextView[text="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12910405',
    },
  ],
});
