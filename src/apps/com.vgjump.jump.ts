import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vgjump.jump',
  name: 'Jump',
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
          matches: '[text="跳过"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14790888',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/14446438',
        },
      ],
    },
  ],
});
