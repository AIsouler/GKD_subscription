import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jujie.xbreader',
  name: '小白PDF阅读器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jujie.xbreader.ad.SplashActivity',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12840884',
    },
  ],
});
