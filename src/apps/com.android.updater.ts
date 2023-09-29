import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.updater',
  name: '系统更新',
  groups: [
    {
      enable: false,
      key: 0,
      name: 'MIUI更新弹窗',
      activityIds: [
        'com.android.updater.MainActivity',
        'com.android.settings.SubSettings',
      ],
      rules:
        '[id="com.android.updater:id/alertTitle"][text="开启智能更新"] < * +2 * > Button[id="android:id/button2"][text="暂不开启"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12715712',
        'https://gkd-kit.songe.li/import/12749906',
      ],
    },
  ],
});
