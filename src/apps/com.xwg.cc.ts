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
            '@ImageView[childCount=0][width<100 && height<100] < FrameLayout[childCount=1] <<n * - * > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/23228410',
        },
      ],
    },
  ],
});
