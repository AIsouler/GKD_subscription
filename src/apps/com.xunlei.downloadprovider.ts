import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunlei.downloadprovider',
  name: '迅雷',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: '.search.ui.search.SearchOperateActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<200][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15048443',
            'https://i.gkd.li/i/15048416',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16388942',
        },
        {
          key: 1,
          position: {
            left: 'width * 0.9055',
            top: 'width * 0.1611',
          },
          excludeMatches: '[text*="跳过"]',
          matches: '[vid="native_container"]',
          snapshotUrls: 'https://i.gkd.li/i/15048354',
          excludeSnapshotUrls: 'https://i.gkd.li/i/15048376',
        },
        {
          key: 2,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24539634',
        },
      ],
    },
    {
      key: 1,
      name: '分段广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.frame.MainTabActivity',
            '.download.taskdetails.newui.DownloadDetailsActivity',
          ],
          matches:
            '[vid="hermes_ad_banner_negative" || vid="close_iv"  || vid="btn_ad_feedback"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/95d56e24-3223-4112-9222-de6d489aa79b',
          snapshotUrls: [
            'https://i.gkd.li/i/23762793',
            'https://i.gkd.li/i/23845066',
          ],
        },
        {
          preKeys: [0],
          fastQuery: true,
          activityIds: [
            '.frame.MainTabActivity',
            '.download.taskdetails.newui.DownloadDetailsActivity',
          ],
          matches: '[text="不感兴趣"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/490bd679-86a5-432e-b0de-427da5513484',
          snapshotUrls: [
            'https://i.gkd.li/i/23762972',
            'https://i.gkd.li/i/23845065',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches: '[vid="close_btn"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/71c2dc44-a976-4910-8e44-26e39865406e',
          snapshotUrls: 'https://i.gkd.li/i/16388890',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12868667',
            'https://i.gkd.li/i/12881946',
            'https://i.gkd.li/i/13295179',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            'com.xunlei.downloadprovider.frame.MainTabActivity',
            'com.xunlei.downloadprovider.launch.LaunchActivity',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882132',
            'https://i.gkd.li/i/12901374',
            'https://i.gkd.li/i/12882237',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.xunlei.web.XLWebViewActivity$XLWebViewActivityImpl',
          matches:
            '[text$="专属惊喜价"] + View > @[desc^="javascript"][clickable=true][childCount=0][width<120&&height<120][visibleToUser=true] <<n [vid="refreshLayout"]',
          exampleUrls: 'https://e.gkd.li/ade9ca8a-b7a5-4a22-8c1f-d14423a34136',
          snapshotUrls: [
            'https://i.gkd.li/i/16914136',
            'https://i.gkd.li/i/23833175',
            'https://i.gkd.li/i/23845039',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.download.center.DownloadCenterActivity',
          matches: ['[text="开通超级会员"]', '[vid="close_btn"]'],
          exampleUrls: 'https://e.gkd.li/6448cedc-2bad-4aa5-846c-9ad82c310545',
          snapshotUrls: 'https://i.gkd.li/i/17658831',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches:
            '@ImageView[childCount=0] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] +2 ViewGroup >3 [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23762955',
            'https://i.gkd.li/i/24541418',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xunlei.upgrade.XUpgradeActivity',
          matches: '[id="com.xunlei.downloadprovider:id/x_upgrade_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13228920',
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            '[text="立即领取" || text="点击领取" || text^="此云盘为您的私人云盘"] + [vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882939',
            'https://i.gkd.li/i/15048352',
            'https://i.gkd.li/i/15048355',
            'https://i.gkd.li/i/15048357',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.search.ui.search.SearchOperateActivity',
          matches: '[vid="search_banner_ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d9e25fc3-249f-4fb9-8606-606ed0c9c893',
          snapshotUrls: 'https://i.gkd.li/i/17725350',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.frame.MainTabActivity',
          matches:
            '[vid="home_flow_item_close_iv" || vid="ad_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23762842',
            'https://i.gkd.li/i/23762864',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.xpan.pan.activity.XPanFileBrowserActivity',
          matches: '[vid="btn_ad_feedback"]',
          snapshotUrls: 'https://i.gkd.li/i/23795248',
        },
      ],
    },
    {
      key: 13,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xunlei.uikit.activity.TransformActivity',
          matches: ['[text="是否打开系统通知"]', '[vid="btn_close"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/bf1ee4f5-126c-46c7-bac1-5e41ec4546e3',
          snapshotUrls: 'https://i.gkd.li/i/15322046',
        },
      ],
    },
  ],
});
