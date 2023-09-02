import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.kugou.android',
  name: `酷狗音乐`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.kugou.android.app.splash.SplashActivity',
      rules: '[desc=`跳过`]',
    },
  ],
};
