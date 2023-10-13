import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wudaokou.hippo',
  name: '盒马',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.wudaokou.hippo.launcher.splash.SplashActivity',
      matchLauncher: true,
      quickFind: true,
      rules: [
        {
          matches: '[id="com.wudaokou.hippo:id/splash_skip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12891918',
        },
      ],
    },
  ],
});
