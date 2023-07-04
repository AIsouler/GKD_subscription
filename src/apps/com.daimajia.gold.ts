import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.daimajia.gold',
  groups: [
    {
      key: 0,
      name: '稀土掘金-开屏广告',
      activityIds: 'im.juejin.android.ui.SplashActivity',
      rules: '[id=`com.daimajia.gold:id/fl_skip`]',
    },
  ],
};
