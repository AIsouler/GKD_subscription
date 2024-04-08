import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.app.lantt.xs',
  name: '蓝豚豚',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14899867',
        },
      ],
    },
  ],
});
