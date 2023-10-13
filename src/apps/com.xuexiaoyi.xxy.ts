import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xuexiaoyi.xxy',
  name: '学小易',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      // quickFind: true, 实机测试会导致无法点击
      activityIds: 'com.xuexiaoyi.entrance.splash.SplashActivity',
      rules: 'View[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12895001',
    },
  ],
});
