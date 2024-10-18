import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.craftvpn.craft',
  name: '小牛加速器',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '@View < View[childCount=2] < View[childCount=1] < View[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13914788',
        },
      ],
    },
  ],
});
