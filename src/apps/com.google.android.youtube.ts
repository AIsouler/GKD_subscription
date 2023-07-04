import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.google.android.youtube',
  groups: [
    {
      key: 0,
      name: 'youtube-视频播放-跳过广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      rules: '[id=`com.google.android.youtube:id/skip_ad_button`]',
    },
  ],
};
