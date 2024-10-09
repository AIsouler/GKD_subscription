import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.mfcloudcalculate.networkdisk.activity.AdFreeActivity',
          ],
          matches: '[id$="iv_ad_free_gif"] + * > [text="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4cafd5fd-b5ed-4df1-b9f2-f443f53a7166',
          snapshotUrls: [
            'https://i.gkd.li/i/13546173',
            'https://i.gkd.li/i/14696860',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.mfcloudcalculate.networkdisk.activity.EmptyActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup <n ViewGroup + ViewGroup [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/cf43eaec-45f8-4e1a-bd3b-6a88fd055d29',
          snapshotUrls: 'https://i.gkd.li/i/16154340',
        },
        {
          key: 2,
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches:
            '[text="反馈"] -4 View[childCount=1] > Image[childCount=0][text=""]',
          exampleUrls: 'https://e.gkd.li/2ec6e71f-93b4-4ac4-a464-26d2a859445f',
          snapshotUrls: 'https://i.gkd.li/i/17247801',
        },
        {
          key: 3,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
          exampleUrls: 'https://e.gkd.li/49cef679-3efb-4719-9af9-8f3a4c311191',
          snapshotUrls: 'https://i.gkd.li/i/17306992',
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/14018247',
            'https://i.gkd.li/i/13259303',
            'https://i.gkd.li/i/13695497',
          ],
        },
        {
          key: 1,
          matches: '[text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://i.gkd.li/i/12846434',
            'https://i.gkd.li/i/13059834',
          ],
        },
      ],
    },
  ],
});
