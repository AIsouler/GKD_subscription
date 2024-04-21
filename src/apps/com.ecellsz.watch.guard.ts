import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecellsz.watch.guard',
  name: '乐康守护',
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
      snapshotUrls: 'https://i.gkd.li/i/14039510',
    },
  ],
});
