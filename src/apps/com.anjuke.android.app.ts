import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.anjuke.android.app',
  groups: [
    {
      key: 0,
      name: '安居客-开屏广告',
      activityIds: 'com.anjuke.android.app.mainmodule.WelcomeActivity',
      rules: '[id=`com.anjuke.android.app:id/skip_btn`]',
    },
  ],
};
