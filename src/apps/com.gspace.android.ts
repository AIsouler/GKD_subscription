import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gspace.android',
  name: 'Gspace',
  groups: [
    {
      key: 0,
      name: '跳过开屏广告',
      activityIds: [
        'com.gspace.android.ui.activity.SplashActivity', // Gspace主应用开屏
        'com.gspace.android.util.ShortcutHandleActivity', // Gspace子应用桌面快捷方式开屏
        'com.gspace.android.ui.activity.VappLoadingActivity', // Gspace子应用开屏
      ],
      rules: '[id="com.gspace.android:id/hiad_skip_text"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12668986',
        'https://gkd-kit.gitee.io/import/12668985',
        'https://gkd-kit.gitee.io/import/12703037',
      ],
    },
    {
      key: 1,
      name: '主页面上方广告',
      activityIds: 'com.gspace.android.ui.activity.main.MainActivity',
      rules: '[id="com.gspace.android:id/hiad_banner_close_button"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12705339',
    },
  ],
});
