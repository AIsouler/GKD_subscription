import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.duer.superapp',
  name: '小度',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.baidu.duer.superapp.splash.SplashActivity',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12506571',
    },
  ],
});
