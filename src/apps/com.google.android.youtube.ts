import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.youtube',
  name: `youtube`,
  groups: [
    {
      key: 0,
      name: '视频播放-跳过广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      rules: '[id=`com.google.android.youtube:id/skip_ad_button`]',
    },
  ],
});
