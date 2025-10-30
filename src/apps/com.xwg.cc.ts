import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xwg.cc',
  name: '希望谷',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.other.YLHAdvertActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/ed6e343a-7a53-4d22-84b8-a2da1da5b241',
          snapshotUrls: 'https://i.gkd.li/i/23228410',
        },
      ],
    },
  ],
});
