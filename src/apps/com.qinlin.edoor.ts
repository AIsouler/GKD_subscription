import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qinlin.edoor',
  name: '亲邻开门',
  groups: [
    {
      key: 1,
      name: '局部广告-首页顶部广告',
      activityIds: 'com.qinlin.edoor.MainActivity',
      rules: [
        {
          matches: [
            '[id="com.qinlin.edoor:id/reaper_ad_source_layout"]',
            '[id="com.qinlin.edoor:id/close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12707733',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches: [
            '[text="广告" || vid="interact_ad_root"]',
            '[vid="iv_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13771774',
            'https://i.gkd.li/i/13932707',
          ],
        },
        {
          key: 1,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[clickable=true] - [desc="立即领取" || desc="开心收下"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12707736',
            'https://i.gkd.li/i/12707738',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/76e82ec7-70e5-47cb-91c2-4d00f33ef8ad',
          snapshotUrls: 'https://i.gkd.li/i/18529948',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@[desc="top_close_button"] < ViewGroup <2 ViewGroup + ViewGroup >3 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a9dc3648-339a-4925-91dd-730346711b0e',
          snapshotUrls: 'https://i.gkd.li/i/18532541',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@ViewGroup + ViewGroup > [text="反馈"]',
          exampleUrls: [
            'https://e.gkd.li/517cc207-1e6c-4416-bbd1-193326879b68',
            'https://e.gkd.li/e60379ac-ee45-4f0f-bb18-5d1ffa4d9210',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18703139',
            'https://i.gkd.li/i/18703827',
          ],
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/a2685f57-ec36-44a1-9529-f10d7fb481ef',
          snapshotUrls: 'https://i.gkd.li/i/18704056',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示-开门成功提示',
      desc: '点击[好的]',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[desc^="开门成功"] > [desc="好 的"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d8e9be78-a9d4-48f9-a6ee-9ed384a190b3',
          snapshotUrls: 'https://i.gkd.li/i/18530006',
        },
      ],
    },
  ],
});
