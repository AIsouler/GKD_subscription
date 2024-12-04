import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jarworld.bleach.bvn.sjm.cyc',
  name: '次元城动漫',
  groups: [
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.jarworld.bleach.bvn.sjm.cyc.MainActivity',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13626949',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.jarworld.bleach.bvn.sjm.cyc.MainActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13626950',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          matches:
            'ViewGroup[childCount=2] > ViewGroup[childCount=2] > @ViewGroup[clickable=true][childCount=1][visibleToUser=true] > ImageView[childCount=0] <<n [id="com.jarworld.bleach.bvn.sjm.cyc:id/ksad_js_reward_card"]',
          snapshotUrls: 'https://i.gkd.li/i/13635410',
        },
      ],
    },
  ],
});
