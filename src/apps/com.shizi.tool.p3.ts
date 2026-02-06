import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shizi.tool.p3',
  name: '动漫共和国',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchRoot: true, // https://github.com/AIsouler/GKD_subscription/issues/1133
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b10db699-ed34-4619-b3ca-5821321f4b58',
          snapshotUrls: 'https://i.gkd.li/i/22136545',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[vid="ms_skipView"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/64be8cde-d60d-4c71-ba13-4bcb78842931',
          snapshotUrls: 'https://i.gkd.li/i/23925246',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.windmill.sdk.widget.InterstitialView',
          matches: '[vid="tobid_interstitial_skip_ll"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8405053f-ebb9-4915-b8c7-499fcaa953ff',
          snapshotUrls: 'https://i.gkd.li/i/23925245',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.beizi.ad.internal.activity.BeiZiInterstitialActivity',
          matches:
            '[vid="beizi_interstitial_ad_close_container_rl"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4ed42cae-88b2-4429-93ba-237bdf221f80',
          snapshotUrls: 'https://i.gkd.li/i/24541547',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'app.video.guoguo.MainActivity',
          matches:
            '[id$="ksad_auto_close_btn"][visibleToUser=true] < LinearLayout < LinearLayout + FrameLayout >6 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/179028f9-ae60-4286-b746-ac2f0bb7aad6',
          snapshotUrls: 'https://i.gkd.li/i/24818734',
        },
        {
          key: 3,
          activityIds: 'app.video.guoguo.MainActivity',
          matches: '[desc="不再显示"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25122774',
        },
      ],
    },
  ],
});
