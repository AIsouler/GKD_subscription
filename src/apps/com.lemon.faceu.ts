import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lemon.faceu',
  name: 'Faceu激萌',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.android.maya.activity.SplashActivity',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12855897',
        },
      ],
    },
  ],
});
