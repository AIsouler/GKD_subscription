import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sdu.didi.psnger',
  name: `滴滴`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.didi.sdk.app.launch.splash.SplashActivity',
      rules: '[id=`com.sdu.didi.psnger:id/skip_ad_ll`]',
    },
  ],
});
