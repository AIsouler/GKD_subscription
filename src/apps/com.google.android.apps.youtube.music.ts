import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.youtube.music',
  name: 'YouTube Music',
  groups: [
    {
      key: 1,
      name: '局部广告-播放界面广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.music.activities.MusicActivity',
          matches:
            '[id="com.google.android.apps.youtube.music:id/skip_ad_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13196056',
        },
      ],
    },
  ],
});
