import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yek.android.kfc.activitys',
  name: '肯德基',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id=`com.yek.android.kfc.activitys:id/splash_tv_3`]',
    },
  ],
});
