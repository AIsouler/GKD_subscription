import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zlfcapp.batterymanager',
  name: '电池容量检测管理',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15140838',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13960341',
        },
      ],
    },
  ],
});
