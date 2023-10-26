import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.redfinger.app',
  name: '红手指云手机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.redfinger.app.activity.Ads2Activity',
      matchLauncher: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.redfinger.app:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://i.gkd.li/import/13166289',
        },
        {
          key: 1,
          matches:
            '[id="com.redfinger.app:id/anythink_myoffer_splash_skip_area"]',
          snapshotUrls: 'https://i.gkd.li/import/13166298',
        },
      ],
    },
  ],
});
