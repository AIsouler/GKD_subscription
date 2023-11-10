import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.youtube',
  name: 'youtube',
  groups: [
    {
      key: 0,
      name: '视频播放-跳过广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id=`com.google.android.youtube:id/skip_ad_button`]',
      snapshotUrls: [
        'https://i.gkd.li/import/12565261',
        'https://i.gkd.li/import/13024980', // matchLauncher
      ],
    },
    {
      key: 1,
      name: '视频播放-赞助商广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      matchLauncher: true,
      rules: 'ImageView[desc="更多选项"] + @ImageView[desc="关闭广告面板"]',
      snapshotUrls: 'https://i.gkd.li/import/12877346',
    },
    {
      key: 2,
      name: '首页-会员广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      matchLauncher: true,
      rules:
        'ImageView < @Button < ViewGroup +3 Button[desc*="YouTube Premium"]',
      snapshotUrls: 'https://i.gkd.li/import/12877357',
    },
  ],
});
