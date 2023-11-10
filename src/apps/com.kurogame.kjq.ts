import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kurogame.kjq',
  name: '库街区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.kurogame.kjq.userlogin.ui.activity.SplashActivity',
        'com.android.launcher.Launcher',
      ],
      rules: [
        {
          matches: '[id="com.kurogame.kjq:id/jump"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12836250',
            'https://i.gkd.li/import/12836248',
          ],
        },
      ],
    },
  ],
});
