import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.handsgo.jiakao.android',
  name: `驾考宝典`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.handsgo.jiakao.android.splash.Login',
      rules: '[id=`com.handsgo.jiakao.android:id/closeLayout`]',
    },
  ],
});
