import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text="跳过"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14753912',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/14031922',
            'https://i.gkd.li/i/14322264',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击"暂不"',
      matchTime: 10000,
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[id="com.paokeji.yiqu:id/btnCancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522',
          snapshotUrls: 'https://i.gkd.li/i/14140265',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] + @View[childCount=2] > [text*="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13829749',
            'https://i.gkd.li/i/14362119',
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.aster.comic.app.view.MainActivity',
          ],
          matches:
            '[text="反馈"] -(2,4) @View[childCount=1][visibleToUser=true] > Image[childCount=0][text=""]',
          snapshotUrls: [
            'https://i.gkd.li/i/13809578',
            'https://i.gkd.li/i/14717730',
            'https://i.gkd.li/i/16062358',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@LinearLayout[clickable=true] - * > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/14847142',
        },
        {
          key: 3,
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches:
            '[id="android:id/content"] >2 FrameLayout[childCount=9] >3 FrameLayout[childCount=2] > @FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15374245',
        },
        {
          key: 4,
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches: '[text="反馈"] + @View > Image[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/15711106',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          matches:
            '@[id="com.kwad.dy.sdk:id/ksad_end_close_btn"] - [text="免费获取"]',
          snapshotUrls: 'https://i.gkd.li/i/16369203',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: 'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          matches: '@ViewGroup[clickable=true] +3 ViewGroup > [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/16401930',
        },
        {
          key: 7,
          name: '腾讯SDK-1',
          activityIds: [
            'com.aster.comic.app.view.MainActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          ],
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13830354',
            'https://i.gkd.li/i/13842716',
            'https://i.gkd.li/i/13842966',
          ],
        },
        {
          key: 8,
          name: '腾讯SDK-2',
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches:
            '[id="android:id/content"] >3 FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15173845',
        },
        {
          key: 9,
          name: '字节SDK',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'FrameLayout[desc*="close"] > View',
          snapshotUrls: 'https://i.gkd.li/i/13839519',
        },
        {
          key: 10,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[id="com.byted.pangle.m:id/tt_reward_full_count_down"]',
          snapshotUrls: 'https://i.gkd.li/i/13810767',
        },
        {
          key: 11,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'Image[childCount=0][text=""] < @View + View > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13810150',
        },
        {
          key: 12,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches: ['[text*="广告"]', '[text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/13809629',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-漫画页链接断开提示',
      desc: '点击[点我重试]',
      actionMaximum: 3,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.aster.comic.app.view.reader.ReaderActivity',
          matches: '@[clickable=true] > [text="点我重试"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d71c73bb-289f-4205-a253-fcd8bd32f196',
          snapshotUrls: 'https://i.gkd.li/i/14572053',
        },
      ],
    },
  ],
});
