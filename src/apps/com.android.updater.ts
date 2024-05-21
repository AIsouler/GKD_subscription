import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.updater',
  name: '系统更新',
  groups: [
    {
      key: 0,
      name: '更新提示-MIUI更新弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.android.updater:id/alertTitle"][text="开启智能更新"] < * +2 * > Button[id="android:id/button2"][text="暂不开启"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12715712',
        'https://i.gkd.li/i/12749906',
      ],
    },
    {
      key: 1,
      name: '更新提示-智能更新弹窗（英语）',
      quickFind: true,
      rules: [
        '[vid="alertTitle"][text="Install automatically?"]',
        '[id="android:id/button2"][text="No"]',
      ],
      snapshotUrls: ['https://i.gkd.li/i/15386869'],
    },
  ],
});
