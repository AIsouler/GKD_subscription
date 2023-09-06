import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.ele',
  name: '饿了么',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'me.ele.application.ui.splash.SplashActivity',
      rules: '[id="me.ele:id/skip_button"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12534930',
    },
  ],
});
