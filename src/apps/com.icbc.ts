import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.icbc.activity.init.LoadingAdvActivity',
      rules: '[id="com.icbc:id/tv_skip_adv"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12739088',
    },
    {
      key: 0,
      name: '第一次启动提示',
      activityIds: 'com.icbc.activity.init.SplashActivity',
      rules: '[id="com.icbc:id/close_btn"]',
    },
  ],
});
