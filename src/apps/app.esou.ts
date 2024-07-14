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
        {
          key: 1,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳过"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
    },
  ],
});
