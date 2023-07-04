import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.MobileTicket',
  groups: [
    {
      key: 0,
      name: '铁路12306-开屏广告',
      activityIds: 'com.MobileTicket.ui.dialog.SplashAdDialog',
      rules: '[id=`com.MobileTicket:id/tv_skip`]',
    },
  ],
};
