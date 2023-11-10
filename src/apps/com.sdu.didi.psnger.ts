import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sdu.didi.psnger',
  name: '滴滴',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: [
        'com.didi.sdk.app.launch.splash.SplashActivity',
        'com.didi.sdk.app.MainActivity',
      ],
      rules: [
        {
          matches: '[id=`com.sdu.didi.psnger:id/skip_ad_ll`]',
          snapshotUrls: 'https://i.gkd.li/import/12888394',
        },
      ],
    },
  ],
});
