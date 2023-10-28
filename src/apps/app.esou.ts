import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'app.esou',
  name: '闪电侠',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'one.easybox.app.ui.activity.SplashActivity',
      matchLauncher: true,
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13187789',
    },
  ],
});
