import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cartoon.dddm',
  name: '嘀嘀动漫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'info.zzjdev.musicdownload.start.SplashActivity1',
      matchLauncher: true,
      rules: '[id="com.cartoon.dddm:id/splash_container"] >n [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13188500',
    },
  ],
});
