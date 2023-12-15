import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.enflick.android.TextNow',
  name: 'TextNow',
  groups: [
    {
      key: 1,
      name: '设为默认应用提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches:
            '[id="com.enflick.android.TextNow:id/btn_dismiss"][text="Not Now"]',
          snapshotUrls: 'https://i.gkd.li/import/13630460',
        },
        {
          preKeys: 0,
          matches: '[id="android:id/button2"][text="SKIP"]',
          snapshotUrls: 'https://i.gkd.li/import/13630463',
        },
      ],
    },
    {
      key: 2,
      name: '通知/链接蓝牙附件设备 权限申请',
      quickFind: true,
      activityIds: 'com.enflick.android.TextNow.activities.MainActivity',
      rules:
        '@ImageView[clickable=true] <2 [id="com.enflick.android.TextNow:id/calling_banner"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13657279',
        'https://i.gkd.li/import/13657280',
      ],
    },
  ],
});
