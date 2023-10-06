import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.igpsport.igpsportandroid',
  name: 'iGPSPORT',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.igpsport.globalapp.activity.SplashAdActivity',
      rules: '[id="com.igpsport.igpsportandroid:id/tvSkip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12818230',
    },
  ],
});
