import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kmb.app1933',
  name: 'KMB . LWB',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: '[desc="Interstitial close button"]',
          exampleUrls: 'https://e.gkd.li/3b5d7bcd-4629-44af-8ee9-5c8a1001ebad',
          snapshotUrls: 'https://i.gkd.li/i/16620586',
        },
        {
          key: 1,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: '[desc="打开"] - View > [text="关闭"]',
          exampleUrls: 'https://e.gkd.li/14158b1c-88f3-4e5c-bbc1-193186e77b07',
          snapshotUrls: 'https://i.gkd.li/i/16620123',
        },
        {
          key: 2,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            'WebView >2 View[childCount=3] >2 View[childCount=2] > View[childCount=2] > View[childCount=1] > Button[clickable=true]',
          exampleUrls: 'https://e.gkd.li/0be64275-23d1-4b13-b444-6e0c67fdd8fc',
          snapshotUrls: 'https://i.gkd.li/i/16621030',
        },
      ],
    },
  ],
});
