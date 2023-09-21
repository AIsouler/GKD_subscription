import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gspace.android',
  name: 'Gspace',
  groups: [
    {
      key: 0,
      name: '跳过开屏广告',
      activityIds: [
        'com.gspace.android.ui.activity.SplashActivity',
        'com.gspace.android.util.ShortcutHandleActivity',
      ],
      rules: '[id="com.gspace.android:id/hiad_skip_text"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12668986',
        'https://gkd-kit.gitee.io/import/12668985',
      ],
    },
  ],
});
