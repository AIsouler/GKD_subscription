import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mxbc.mxsa',
  name: '蜜雪冰城',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.mxbc.mxsa.modules.splash.SplashActivity'],
      rules: [
        {
          matches: '[id="com.mxbc.mxsa:id/count_down"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12840093',
        },
      ],
    },
  ],
});
