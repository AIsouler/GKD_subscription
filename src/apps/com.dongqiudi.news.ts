import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dongqiudi.news',
  name: '懂球帝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          // 点击方式为 clickNode 时会误触广告，更改点击方式为 clickCenter https://github.com/AIsouler/GKD_subscription/issues/905
          key: 0,
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/74db13f0-d87d-41a3-bbbb-1b075d8ae7d6',
          snapshotUrls: 'https://i.gkd.li/i/20218520',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@View[clickable=true] - [text="互动广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3b636c88-23de-4e2a-86fd-2846a0f0274b',
          snapshotUrls: 'https://i.gkd.li/i/20262129',
        },
        {
          key: 2,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/940ce4e2-da5f-4a43-b319-4131a22cb1e0',
          snapshotUrls: 'https://i.gkd.li/i/20262130',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.DownloadActivity',
          matches: 'TextView[text*="新版本"] +3 TextView[text="下次提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/12620586',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-首页信息流广告',
      desc: '点击卡片广告x关闭按钮-关闭反馈理由弹窗',
      activityIds: 'com.dongqiudi.news.MainActivity',
      fastQuery: true,
      rules: [
        {
          preKeys: [1, 2],
          name: '首页信息流广告-反馈理由',
          matches:
            'TextView[text="诱导点击"][id="com.dongqiudi.news:id/text_item"]',
          snapshotUrls: 'https://i.gkd.li/i/12620656',
        },
        {
          key: 1,
          matches:
            'TextView[id="com.dongqiudi.news:id/ads_label"] +(n) ImageView[id="com.dongqiudi.news:id/feedback_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12620654',
        },
        {
          key: 2,
          matches:
            'TextView[id="com.dongqiudi.news:id/ads_title"] +(2) RelativeLayout > ImageView[id="com.dongqiudi.news:id/feedback_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12620788',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.dongqiudi.news.MainActivity',
          matches: '[id="com.dongqiudi.news:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13260467',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] +(1,2) View[childCount=1] > Image[childCount=0][text=""][width<60 && height<60]',
          exampleUrls: 'https://e.gkd.li/87e47cae-fa83-4d25-879c-728a1519ee55',
          snapshotUrls: 'https://i.gkd.li/i/20403710',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-数据页弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dongqiudi.news.MainActivity',
      rules: [
        {
          key: 1,
          name: '腾讯广告SDK',
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13626900',
        },
        {
          key: 2,
          name: '快手广告磁力智投SDK',
          fastQuery: true,
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13627105',
        },
        {
          key: 3,
          name: '字节广告穿山甲SDK-1',
          matches: 'View[text="反馈"] -2 @View > Image',
          snapshotUrls: 'https://i.gkd.li/i/13627106',
        },
        {
          key: 4,
          name: '字节广告穿山甲SDK-2', //合并key3
          matches: 'FrameLayout[desc^="webview-close"] > View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12620588',
        },
      ],
    },
    {
      key: 9,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="notification_button_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/81cea4de-9288-4ec8-97ea-7c4a9b19fd08',
          snapshotUrls: 'https://i.gkd.li/i/19666282',
        },
      ],
    },
  ],
});
