import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.kugou.android.app.splash.SplashActivity',
      rules: '[desc=`跳过`]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12775410',
    },
  ],
});
