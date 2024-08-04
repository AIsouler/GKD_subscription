import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'app.esou',
  name: '闪电侠',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fe2a046b-1abe-4aba-a0df-8d9568211e0d',
          snapshotUrls: 'https://i.gkd.li/i/14189313',
        },
      ],
    },
  ],
});
