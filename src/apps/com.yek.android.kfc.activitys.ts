import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yek.android.kfc.activitys',
  name: `肯德基`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.yum.android.superkfc.ui.v5.HomeV5Activity',
      rules: '[id=`com.yek.android.kfc.activitys:id/splash_tv_3`]',
    },
  ],
});
