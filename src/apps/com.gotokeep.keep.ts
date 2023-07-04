import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.gotokeep.keep',
  groups: [
    {
      key: 0,
      name: 'Keep-开屏广告',
      activityIds: 'com.gotokeep.keep.splash.SplashActivity',
      rules: '[id=`com.gotokeep.keep:id/textSkip`]',
    },
  ],
};
