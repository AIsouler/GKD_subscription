import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: 0,
      name: '第一次启动提示',
      activityIds: 'com.icbc.activity.init.SplashActivity',
      rules: '[id=`com.icbc:id/close_btn`]',
    },
  ],
});
