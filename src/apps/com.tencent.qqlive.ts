import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          action: 'clickCenter',
          matches: [
            'TextView[text*="跳过"][text.length<10][visibleToUser=true][height>0&&width>0]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/17409509'],
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: 'TextView[text*="青少年模式"] +3 TextView[text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/12700145',
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text*="有新版本啦!"] +3 TextView[text="暂不升级"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12700486',
        'https://i.gkd.li/i/13799951',
      ],
    },
    {
      key: 3,
      name: '分段广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '首页顶部卡片广告',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches:
            'FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700299',
            'https://i.gkd.li/i/12700302',
            'https://i.gkd.li/i/13685929', // 限定 visibleToUser=true 防止误触
          ],
        },
        {
          key: 1,
          name: '首页顶部背景广告',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches: '[text="关闭广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12700518',
        },
        {
          key: 2,
          name: '个人中心页卡片广告',
          activityIds: [
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            'ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700175',
            'https://i.gkd.li/i/13759380',
          ],
        },
        {
          key: 3,
          name: '个人中心页顶部背景广告',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches:
            'RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12777344',
        },
        {
          key: 4,
          name: '点击右上角[广告]',
          activityIds: [
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.activity.VideoDetailActivity',
          ],
          matches:
            'RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc="the ad tag"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12737313',
            'https://i.gkd.li/i/13685842',
          ],
        },
        {
          key: 5,
          name: '点击右下角关闭',
          matches:
            'ImageView[childCount=0] < * < RelativeLayout + FrameLayout + RelativeLayout > RelativeLayout > RelativeLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13426421',
        },
        {
          key: 6,
          fastQuery: true,
          matches: '[id="com.tencent.qqlive:id/feed_icon"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/42013a93-fb12-4747-92e0-95f5028eb8e5',
          snapshotUrls: 'https://i.gkd.li/i/14318802',
        },
        // 以下是配合本规则组内其他key使用的规则，反馈界面的规则都是一样的
        {
          preKeys: 6,
          key: 96,
          fastQuery: true,
          matches:
            '[id="com.tencent.qqlive:id/ad_feed_back_dislike"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/8746fdc8-828e-42bb-9160-8e67b7af2dc7',
          snapshotUrls: 'https://i.gkd.li/i/14318811',
        },
        {
          key: 97,
          name: '广告反馈卡片-点击不感兴趣',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches: '@FrameLayout[clickable=true] >3 [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13695084',
        },
        {
          key: 98,
          name: '广告反馈卡片-选择原因',
          fastQuery: true,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.activity.VideoDetailActivity',
            'com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            '[text="关闭这条广告的原因"] +(2) RecyclerView > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700303',
            'https://i.gkd.li/i/12829866',
            'https://i.gkd.li/i/13685871',
            'https://i.gkd.li/i/13703219',
          ],
        },
        {
          preKeys: [98],
          key: 99,
          name: '广告反馈卡片-确认原因',
          fastQuery: true,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.activity.VideoDetailActivity',
            'com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            '[text="关闭这条广告的原因"] + [text="确认"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700210',
            'https://i.gkd.li/i/13685877',
            'https://i.gkd.li/i/13703298',
          ],
        },
      ],
    },
    {
      key: 4,
      fastQuery: true,
      name: '全屏广告-视频播放时的广告',
      desc: '自动点击 跳过/关闭广告',
      activityIds: 'com.tencent.qqlive.ona.activity.VideoDetailActivity',
      rules: [
        {
          key: 0,
          name: '全屏广告',
          matches:
            '@[text$="跳过广告"][clickable=true] < LinearLayout > [text="VIP可关闭该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700407',
            'https://i.gkd.li/i/12700433',
          ],
        },
        {
          key: 1,
          name: '左下角悬浮广告',
          matches:
            'FrameLayout[childCount=2] > FrameLayout > RelativeLayout > View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13043079',
        },
        {
          key: 2,
          name: '全屏广告2',
          fastQuery: true,
          matches: '@[text$="关闭广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13526547',
        },
        {
          key: 3,
          name: '居中广告-1',
          matches:
            'ViewGroup[childCount>10] > FrameLayout[index=10] >4 ImageView[clickable=true][visibleToUser=true][index=1 || index=3]',
          snapshotUrls: [
            'https://i.gkd.li/i/13695067',
            'https://i.gkd.li/i/13946107',
            'https://i.gkd.li/i/14001277',
          ],
        },
        {
          key: 4,
          name: '居中广告-2',
          fastQuery: true,
          matches: '[id="com.tencent.qqlive:id/pause_ad_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c8f55e94-30ad-440d-b4d8-06fb19f0c17e',
          snapshotUrls: 'https://i.gkd.li/i/14318385',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-首页-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.redpacket.rain.OpenRedPacketActivity',
          matches:
            '@ImageView[clickable=true] < ViewGroup[childCount=5] < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d',
          snapshotUrls: 'https://i.gkd.li/i/13842643',
        },
        {
          key: 1,
          activityIds: '.ona.activity.VideoDetailActivity',
          matches: '@[clickable=true] - [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1b7518c9-4ca7-4905-8929-6f0130abf19f',
          snapshotUrls: 'https://i.gkd.li/i/14358913',
        },
        {
          key: 2,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '@RelativeLayout[clickable=true] + * >3 [text="立即预约"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334',
          snapshotUrls: 'https://i.gkd.li/i/14567294',
        },
        {
          key: 3,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -3 LinearLayout >2 [text="立即免费领取"]',
          exampleUrls: 'https://e.gkd.li/3f248280-61c1-440c-8fb8-90ca93acf53e',
          snapshotUrls: 'https://i.gkd.li/i/17476569',
        },
        {
          key: 4,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            'TextView[text*="腾讯视频VIP片免费看"] +3 TextView[text="暂不需要，稍后领取"]',
          exampleUrls: 'https://e.gkd.li/4efdb351-8ba9-451e-9c62-cd0549544624',
          snapshotUrls: 'https://i.gkd.li/i/17525567',
        },
        {
          key: 5,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '@ImageView[clickable=true] + [text="免费看"]',
          exampleUrls: 'https://e.gkd.li/48f84ee3-f6ef-4059-b43b-0b6cfa83ddb9',
          snapshotUrls: 'https://i.gkd.li/i/17474933',
        },
      ],
    },
    {
      key: 6,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: 'LinearLayout > @[text="以后再说"] + [text="好的"]',
          snapshotUrls: 'https://i.gkd.li/i/12700139',
        },
        {
          key: 1,
          matches: '@ImageView + * > [text^="开启通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13670465',
        },
      ],
    },
  ],
});
