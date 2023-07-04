import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.icbc',
  groups: [
    {
      key: 0,
      name: '中国工商银行-第一次启动提示',
      activityIds: 'com.icbc.activity.init.SplashActivity',
      rules: '[id=`com.icbc:id/close_btn`]',
    },
  ],
};
