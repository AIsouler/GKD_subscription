import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.sdu.didi.psnger',
  groups: [
    {
      key: 0,
      name: '滴滴-开屏广告',
      activityIds: 'com.didi.sdk.app.launch.splash.SplashActivity',
      rules: '[id=`com.sdu.didi.psnger:id/skip_ad_ll`]',
    },
  ],
};
