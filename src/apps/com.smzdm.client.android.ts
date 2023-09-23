import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.smzdm.client.android.app.WelComeActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[id="com.smzdm.client.android:id/tv_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12535072',
    },
    {
      key: 1,
      name: 'APP内弹窗广告',
      activityIds: 'com.smzdm.client.android.app.HomeActivity',
      rules: '[id="com.smzdm.client.android:id/dialog_home_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12695751',
    },
  ],
});
