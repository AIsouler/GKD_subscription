import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.updater',
  name: '系统更新',
  groups: [
    {
      key: 0,
      name: '更新提示-智能更新弹窗',
      quickFind: true,
      rules: [
        '[vid="alertTitle"][text="开启智能更新"]',
        '[id="android:id/button2"][text="暂不开启"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12715712',
        'https://i.gkd.li/i/12749906',
        'https://i.gkd.li/i/15386937', // quickFind
      ],
    },
  ],
});
