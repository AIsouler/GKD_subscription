import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.manwei.djz',
  name: '嗨探',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.manwei.djz.module.splash.SplashActivity',
      rules: '[id="com.manwei.djz:id/aplashLayout"] >6 TextView[text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12714328',
    },
  ],
});
