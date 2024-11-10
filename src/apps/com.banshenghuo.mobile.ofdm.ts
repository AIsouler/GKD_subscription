import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.banshenghuo.mobile.ofdm',
  name: 'OmoFun',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[vid="anythink_myoffer_btn_close_id"]',
          snapshotUrls: 'https://i.gkd.li/i/15443189',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.banshenghuo.mobile.ofdm.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/15444005',
        },
        {
          key: 2,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -n @View[index=0] > Image',
          snapshotUrls: 'https://i.gkd.li/i/15444017',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.banshenghuo.mobile.ofdm.MainActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[clickable=true] < ViewGroup + ViewGroup > [text="广告"]',
          exampleUrls: 'https://e.gkd.li/8bbf31e8-598b-4021-9136-8de189fc7cf9',
          snapshotUrls: 'https://i.gkd.li/i/16548166',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-公告弹窗',
      desc: '点击[我知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[desc="我知道了"]',
          exampleUrls: 'https://e.gkd.li/327ea04c-acda-4913-a0a9-fdda9cd83dd7',
          snapshotUrls: 'https://i.gkd.li/i/16548158',
        },
      ],
    },
  ],
});
