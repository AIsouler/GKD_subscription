import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.anjuke.android.app',
  name: `安居客`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.anjuke.android.app.mainmodule.WelcomeActivity',
      rules: '[id=`com.anjuke.android.app:id/skip_btn`]',
    },
  ],
};
