import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.Kingdee.Express',
  name: '快递100',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.Kingdee.Express.module.splash.SplashActivity',
      rules:
        '[id="com.Kingdee.Express:id/rl_splash_container"] >n [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12775998',
    },
  ],
});
