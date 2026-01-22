import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.waimaiii.waimaiii',
  name: '歪麦霸王餐',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sangshen.ad_jg_flutter_sdk.SplashAdActivity',
      rules: [
        {
          matches:
            'View > View[childCount=2] > ImageView[clickable=true] + ImageView[id=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13346187',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '[id$="ksad_ad_dislike"] <n RelativeLayout - FrameLayout >3 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/5559308c-b40c-484f-a4ee-c162b507fb27',
          snapshotUrls: 'https://i.gkd.li/i/24790719',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] <2 ViewGroup <2 ViewGroup <2 ViewGroup - ViewGroup >3 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/24656915',
        },
      ],
    },
  ],
});
