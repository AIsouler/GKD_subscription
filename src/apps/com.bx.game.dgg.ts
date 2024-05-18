import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bx.game.dgg',
  name: '看剧',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -2 @View > Image[childCount=0][text=""]',
          snapshotUrls: 'https://i.gkd.li/i/15335006',
        },
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[vid="anythink_myoffer_btn_close_id"]',
          snapshotUrls: 'https://i.gkd.li/i/15362931',
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.bx.game.dgg.MainActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup +2 * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15362927',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-[温馨提示]弹窗',
      desc: '点击[我知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.bx.game.dgg.MainActivity',
          matches: '[desc="我知道了"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8a825661-5595-4577-835c-2a0b2d41bc14',
          snapshotUrls: 'https://i.gkd.li/i/15362930',
        },
      ],
    },
  ],
});
