import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.yek.android.kfc.activitys',
  groups: [
    {
      key: 0,
      name: '肯德基-开屏广告',
      activityIds: 'com.yum.android.superkfc.ui.v5.HomeV5Activity',
      rules: '[id=`com.yek.android.kfc.activitys:id/splash_tv_3`]',
    },
  ],
};
