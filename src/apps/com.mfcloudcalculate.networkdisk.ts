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
            'com.adgain.sdk.base.activity.AdActivity',
          ],
          matches:
            '[vid="tv_ad_free_close" || vid="tv_ad_free_colse" || vid="adgain_interstitial_skip_ll" || vid="adgain_interstitial_close_ll"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/4cafd5fd-b5ed-4df1-b9f2-f443f53a7166',
          snapshotUrls: [
            'https://i.gkd.li/i/13546173',
            'https://i.gkd.li/i/14696860',
            'https://i.gkd.li/i/18121213',
            'https://i.gkd.li/i/24675097',
            'https://i.gkd.li/i/24927790',
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
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/49cef679-3efb-4719-9af9-8f3a4c311191',
          snapshotUrls: [
            'https://i.gkd.li/i/17306992',
            'https://i.gkd.li/i/24472832',
          ],
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
        {
          key: 10,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][width<60 && height<60] < View[childCount=1] < View[childCount=1] < View[childCount=1] < View[childCount=1] + View >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/34c7741f-0f03-4b0d-b8d2-917ed297e304',
          snapshotUrls: 'https://i.gkd.li/i/24119772',
        },
        {
          key: 11,
          fastQuery: true,
          position: {
            left: 'width * 0.9636',
            top: 'height * 0.55',
          },
          activityIds: '.MainActivity',
          matches:
            '[desc="开通前请阅读"] -n @ImageView[childCount=0][width>800] <(1,2) View < View < View < View < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/ee504d60-ca93-40de-bb0f-292ef1df8c70',
          snapshotUrls: [
            'https://i.gkd.li/i/24119773',
            'https://i.gkd.li/i/25128678',
          ],
        },
        {
          key: 12,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[vid="channel_insert_close_iv"][clickable=true] - ImageView[vid="iv_ad_icon"]',
          exampleUrls: 'https://e.gkd.li/fa0391fe-54d4-4db0-930d-2cb9002b3786',
          snapshotUrls: 'https://i.gkd.li/i/24325263',
        },
        {
          key: 13,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@TextView[clickable=true][childCount=0] <2 FrameLayout[childCount=2] - LinearLayout >4 [text$="第三方应用"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e6486e20-e908-48da-b84a-f3ea5519346b',
          snapshotUrls: 'https://i.gkd.li/i/24404354',
        },
        {
          key: 14,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][width<60 && height<60] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text="反馈"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24473530',
        },
        {
          key: 15,
          activityIds: 'com.byazt.sr.Stub_Standard_Portrait_Activity',
          matches: 'View[childCount=5] > [text^="svg"][index=0][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/25128382',
        },
        {
          key: 16,
          activityIds: '.MainActivity',
          matches:
            'View[childCount=0] < FrameLayout[childCount=2] - LinearLayout >4 [text$="第三方应用"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25128313',
        },
        {
          key: 17,
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          matches: '[id="ad_area"] > [id="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/25128394',
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
    {
      key: 6,
      name: '分段广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@TextView[clickable=true][childCount=0] <2 FrameLayout[childCount=2] < FrameLayout <2 LinearLayout + LinearLayout > [text="了解详情"]',
          exampleUrls: 'https://e.gkd.li/64fcf71b-b7a8-4d1e-8fd4-8be4ea4692a2',
          snapshotUrls: 'https://i.gkd.li/i/24404389',
        },
        {
          key: 1,
          activityIds: '.MainActivity',
          matches:
            '@Image[childCount=0][width<60 && height<60][visibleToUser=true] < View[childCount=1] -(1,2,3) View >(2,3) [text="广告"]',
          exampleUrls: 'https://e.gkd.li/e6fc2756-928f-48d4-af51-3b6ce9aa557b',
          snapshotUrls: [
            'https://i.gkd.li/i/24404390',
            'https://i.gkd.li/i/24979310',
            'https://i.gkd.li/i/25128397',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@View[clickable=true][childCount=0][visibleToUser=true] < [desc^="dislike"] + FrameLayout >2 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/54463724-d3c0-42b4-8fac-adf47b31799d',
          snapshotUrls: 'https://i.gkd.li/i/24404391',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=1] -2 ViewGroup >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/24589944',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[clickable=true][id=null][childCount=0] - [text="投诉"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24979308',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '[vid="ptgImgClose" || vid="sdm_myoffer_banner_close" || vid="ksad_banner_item_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24979282',
            'https://i.gkd.li/i/25128395',
            'https://i.gkd.li/i/25128396',
          ],
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][clickable=true] - [text^="立即"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25128309',
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5, 6],
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@[clickable=true] >2 [text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24590419',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[clickable=true][childCount=0] <2 FrameLayout +n LinearLayout > [text^="立即"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a49e21d0-7259-4f6a-93e2-add166738a5b',
          snapshotUrls: [
            'https://i.gkd.li/i/24675412',
            'https://i.gkd.li/i/24675589',
          ],
        },
      ],
    },
  ],
});
