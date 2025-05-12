import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhx.wisdomtree',
  name: '智慧树家长端',
  groups: [
    {
      key: 1,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches: '[vid="iv_close_ad"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/82c2a85d-1007-45e2-abed-3c5933563a92',
          snapshotUrls: 'https://i.gkd.li/i/20062093',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches: '[vid="tv_close_ad"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/486eae02-6c25-4e2a-b6a4-7997a8887eac',
          snapshotUrls: 'https://i.gkd.li/i/20062094',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches:
            '@[vid="rl_down"] <<n [vid="tt_ad_view"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/46522b87-512c-47ab-9a57-c333eca6a789',
          snapshotUrls: 'https://i.gkd.li/i/20074571',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.core.act.FragmentSingleAct',
          matches:
            'FrameLayout[childCount=1] > FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[id=null][text=null][width<50 && height<50] <<n [vid="fl_csj_banner_view"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ee6796d4-ba24-4d34-8ef2-07969d102715',
          snapshotUrls: 'https://i.gkd.li/i/20074641',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@View[childCount=1][visibleToUser=true] < View[childCount=1][visibleToUser=true] + View[childCount=1][visibleToUser=true] > [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/708daddf-5d9b-4cc9-977f-ba48c3f33ba3',
          snapshotUrls: 'https://i.gkd.li/i/20074568',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$="广告"]',
          exampleUrls: 'https://e.gkd.li/f6c1c4ec-56d8-4c02-a66d-42a005bb196c',
          snapshotUrls: 'https://i.gkd.li/i/20095481',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/c72c44bc-a16a-4929-8aa6-457893c1254f',
          snapshotUrls: 'https://i.gkd.li/i/20154496',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/91f3f0d3-d424-4e06-99a2-8e31dd71df41',
          snapshotUrls: 'https://i.gkd.li/i/20154499',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          exampleUrls: 'https://e.gkd.li/c24edc78-83d6-4a73-a555-fd69635a92b8',
          snapshotUrls: 'https://i.gkd.li/i/20154500',
        },
      ],
    },
  ],
});
