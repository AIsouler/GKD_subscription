import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.poketrade',
  name: 'PokeHub',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '@[desc="Cancel"][visibleToUser=true] + [desc="Update"]',
          exampleUrls: 'https://e.gkd.li/b0a0c338-16b1-4892-9cd6-92b4f485fda8',
          snapshotUrls: 'https://i.gkd.li/i/19624988',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-订阅广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 View[getChild(5).desc="Subscribe"] < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/19371ab4-5b1a-4efb-925a-883252fd50d0',
          snapshotUrls: 'https://i.gkd.li/i/19643520',
        },
      ],
    },
  ],
});
