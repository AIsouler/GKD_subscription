import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fiio.music',
  name: '飞傲音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.fiio.music.activity.SplashActivity',
      rules: [
        {
          matches: '[id="com.fiio.music:id/btn_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12748933',
        },
      ],
    },
  ],
});
