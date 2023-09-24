import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mymoney',
  name: '随手记',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mymoney.biz.splash.SplashScreenActivity',
      rules: '[id="com.mymoney:id/external_ad_content"] >2 [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12709192',
    },
  ],
});
