import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.kugou.android',
  groups: [
    {
      key: 0,
      name: '酷狗音乐-开屏广告',
      activityIds: 'com.kugou.android.app.splash.SplashActivity',
      rules: '[desc=`跳过`]',
    },
  ],
};
