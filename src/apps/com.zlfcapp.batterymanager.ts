import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zlfcapp.batterymanager',
  name: '电池容量检测管理',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13960341',
        },
      ],
    },
  ],
});
