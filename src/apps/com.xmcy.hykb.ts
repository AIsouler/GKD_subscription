import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xmcy.hykb',
  name: '好游快爆',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xmcy.hykb.app.ui.splash.SplashActivity',
      rules: '[id="com.xmcy.hykb:id/skip"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12774856',
    },
  ],
});
