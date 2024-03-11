import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lofter.android',
  name: 'LOFTER',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
      snapshotUrls: 'https://i.gkd.li/i/14204158',
    },
  ],
});
