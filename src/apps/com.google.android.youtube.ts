import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.youtube',
  name: 'youtube',
  groups: [
    {
      key: 0,
      name: '视频播放-跳过广告',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12565261',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      rules: '[id=`com.google.android.youtube:id/skip_ad_button`]',
    },
    {
      key: 1,
      name: '视频播放-赞助商广告',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12877346',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      rules: 'ImageView[desc="更多选项"] + @ImageView[desc="关闭广告面板"]',
    },
    {
      key: 2,
      name: '首页-会员广告',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12877357',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      rules:
        'ImageView < @Button < ViewGroup +3 Button[desc*="YouTube Premium"]',
    },
  ],
});
