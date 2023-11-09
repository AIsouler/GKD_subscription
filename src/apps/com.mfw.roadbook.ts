import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mfw.roadbook',
  name: '马蜂窝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.mfw.roadbook.business.launch.SplashAdActivity',
      rules: [
        {
          matches: '[id="com.mfw.roadbook:id/skipLayout"]',
          snapshotUrls: 'https://i.gkd.li/import/import/13049046',
        },
      ],
    },
  ],
});
