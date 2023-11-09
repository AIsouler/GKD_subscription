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
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12901732',
        },
        {
          key: 1,
          matches:
            '[id="com.jovetech.CloudSee.temp:id/splash_container"] >n [text^="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12829886',
            'https://i.gkd.li/import/12893553',
          ],
        },
      ],
    },
  ],
});
