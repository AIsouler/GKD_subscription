import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.trip',
  name: '飞猪',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.taobao.trip.splash.ui.ImageSplashActivity'],
      rules: [
        {
          matches: '[id="com.taobao.trip:id/splash_biz_skip_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/import/13065579',
        },
      ],
    },
  ],
});
