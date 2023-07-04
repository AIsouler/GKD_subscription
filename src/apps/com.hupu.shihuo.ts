import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.hupu.shihuo',
  groups: [
    {
      key: 0,
      name: '识货-开屏广告',
      activityIds:
        'com.shizhi.shihuoapp.module.main.ui.welcome.WelcomeActivity',
      rules: '[id=`com.hupu.shihuo:id/fl_countdown`]',
    },
  ],
};
