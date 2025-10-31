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
            '.activity.LauncherActivity',
          ],
          matches:
            '[vid="tv_ad_free_close" || vid="tv_ad_free_colse"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/4cafd5fd-b5ed-4df1-b9f2-f443f53a7166',
          snapshotUrls: [
            'https://i.gkd.li/i/13546173',
            'https://i.gkd.li/i/14696860',
            'https://i.gkd.li/i/18121213',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.mfcloudcalculate.networkdisk.activity.EmptyActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup <7 ViewGroup + ViewGroup [text="广告"]',
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
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/49cef679-3efb-4719-9af9-8f3a4c311191',
          snapshotUrls: 'https://i.gkd.li/i/17306992',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches: '@ImageView[clickable=true] - [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/af430910-56e0-4b19-b23f-b120ce19fdc0',
          snapshotUrls: 'https://i.gkd.li/i/17456625',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/069fb571-ab57-42a7-a360-79b44efc2790',
          snapshotUrls: 'https://i.gkd.li/i/18032004',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: [
            '[text="反馈"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/1326c88b-81e0-4f78-b301-778d29e10433',
          snapshotUrls: 'https://i.gkd.li/i/18121205',
        },
        {
          key: 7,
          fastQuery: true,
          activityIds: 'com.meishu.sdk.activity.SdkInterstitialActivity',
          matches:
            '[vid="ms_activity_sdk_interstitial_cacel"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e2e7b175-20f6-4e12-a24a-504364a8b765',
          snapshotUrls: 'https://i.gkd.li/i/18095705',
        },
        {
          key: 8,
          fastQuery: true,
          action: 'back',
          activityIds: '.MainActivity',
          matches:
            '[desc="开通前请阅读"] -8 @ImageView[clickable=true][childCount=0][visibleToUser=true] < View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/21820334',
        },
        {
          key: 9,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@[id="cj.mobile.wm.allmodules:id/wm_pop_pic_close"] +n * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/23253580',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '@View[clickable=true] - [desc="立即更新"]',
          exampleUrls: 'https://e.gkd.li/02cf5d37-8808-4abb-abf9-81f7ba8a8375',
          snapshotUrls: 'https://i.gkd.li/i/17456852',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-扫码自动确认登录',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: '.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '[desc="我已阅读并同意"] - @View[clickable=true][text=null][visibleToUser=true][width<100 && height<100] <7 View[childCount=11] < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/b84f0579-952b-4c6c-9706-dc300eb4a555',
          snapshotUrls: 'https://i.gkd.li/i/20521452',
        },
        {
          preKeys: [0],
          matches:
            '@View[desc="确认登录"][visibleToUser=true] <5 View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/b84f0579-952b-4c6c-9706-dc300eb4a555',
          snapshotUrls: 'https://i.gkd.li/i/20521452',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-相册自动备份弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true][width<100 && height<100] +2 [desc="开启相册自动备份"]',
          exampleUrls: 'https://e.gkd.li/e86a59e7-9329-4931-9bdd-5f6b4f896294',
          snapshotUrls: 'https://i.gkd.li/i/21326468',
        },
      ],
    },
  ],
});
