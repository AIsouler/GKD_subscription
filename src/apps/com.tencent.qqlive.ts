import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: 'TextView[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/14049316',
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
          activityIds: '.ona.update.trunk.client.TrunkUpdateActivity',
          matches: '[text="暂不升级"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19666787',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-卡片广告',
      activityIds: [
        '.ona.activity.SplashHomeActivity',
        '.ona.activity.VideoDetailActivity',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] - FrameLayout >4 ViewGroup > [vid="player_sub_title_view"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d0fb9740-defa-437a-882e-b3c5d6a2d231',
          snapshotUrls: 'https://i.gkd.li/i/19666783',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '[desc="the ad tag"] < @FrameLayout[clickable=true] < RelativeLayout < RelativeLayout +(1,2) * >(4,5) [text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看"][text.length<6][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19667010',
            'https://i.gkd.li/i/19667126',
            'https://i.gkd.li/i/19667028',
            'https://i.gkd.li/i/19667404',
            'https://i.gkd.li/i/19667413',
            'https://i.gkd.li/i/19667494',
            'https://i.gkd.li/i/19667496',
            'https://i.gkd.li/i/19667620',
            'https://i.gkd.li/i/19667647',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@ImageView[text=null][desc=null][childCount=0][clickable=true][visibleToUser=true][width<250 && height<150] - * >(1,2) [text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看"]',
          snapshotUrls: [
            'https://i.gkd.li/i/19666328',
            'https://i.gkd.li/i/19693394',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 50,
          fastQuery: true,
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19667198',
            'https://i.gkd.li/i/19667244',
          ],
        },
        {
          preKeys: [50],
          fastQuery: true,
          matches: '[text="确认"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19667102',
            'https://i.gkd.li/i/19666759',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-视频播放时的广告',
      desc: '自动点击 跳过/关闭广告',
      activityIds: 'com.tencent.qqlive.ona.activity.VideoDetailActivity',
      rules: [
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
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][childCount=0][width<150&&height<150] - * >(3,4) [text^="摇动或点击" || text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18476380',
            'https://i.gkd.li/i/18476384',
            'https://i.gkd.li/i/19667827',
          ],
        },
        {
          key: 4,
          name: '居中广告-2',
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][childCount=0] +2 [text^="摇动或点击" || text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4bf0ff94-239d-4b43-900f-a375b44922e0',
          snapshotUrls: [
            'https://i.gkd.li/i/13946107',
            'https://i.gkd.li/i/14318385',
            'https://i.gkd.li/i/18476383',
            'https://i.gkd.li/i/20038310',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds:
            'com.tencent.qqlive.redpacket.rain.OpenRedPacketActivity',
          matches:
            '@ImageView[clickable=true] < ViewGroup[childCount=5] < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d',
          snapshotUrls: 'https://i.gkd.li/i/13842643',
        },
        {
          key: 1,
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches: '@RelativeLayout[clickable=true] + * >3 [text="立即预约"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334',
          snapshotUrls: 'https://i.gkd.li/i/14567294',
        },
        {
          key: 2,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -3 LinearLayout >2 [text="立即免费领取"]',
          exampleUrls: 'https://e.gkd.li/8b128ebc-ce9c-4345-8094-769f9afa8cd6',
          snapshotUrls: 'https://i.gkd.li/i/17088095',
        },
        {
          key: 3,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '[text="暂不需要，稍后领取"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3256ed8e-752c-426d-9d64-26c9fdea9b09',
          snapshotUrls: 'https://i.gkd.li/i/17542869',
        },
        {
          key: 4,
          activityIds: '.ona.activity.VideoDetailActivity',
          matches: '[text="放弃权益"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/37d3d077-1d3b-4b4d-87c2-4e0fa00d423e',
          snapshotUrls: 'https://i.gkd.li/i/19666924',
        },
        {
          key: 5,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] <2 RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/afb17212-1dcb-4d07-a9ce-b4f775ccd6fc',
          snapshotUrls: 'https://i.gkd.li/i/19666714',
        },
      ],
    },
    {
      key: 20,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      activityIds: '.ona.activity.SplashHomeActivity',
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
    {
      key: 21,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '投屏页面广告',
          fastQuery: true,
          activityIds: 'com.tencent.qqlive.ona.activity.VideoDetailActivity',
          matches: '@[clickable=true] - [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1b7518c9-4ca7-4905-8929-6f0130abf19f',
          snapshotUrls: 'https://i.gkd.li/i/14358913',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true][width<250 && height<150] <3 RelativeLayout < FrameLayout <2 FrameLayout < FrameLayout <2 ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <5 [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/0ea465ad-e4e4-4af5-92a4-2d71e44845f4',
          snapshotUrls: 'https://i.gkd.li/i/19667104',
        },
      ],
    },
    {
      key: 22,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.ona.activity.SplashHomeActivity',
            '.ona.activity.VideoDetailActivity',
          ],
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] + [text^="免费看"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5f6447c1-39f6-4711-a907-fdf36f502ec6',
          snapshotUrls: [
            'https://i.gkd.li/i/17542913',
            'https://i.gkd.li/i/19667010',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ona.activity.VideoDetailActivity',
          matches:
            '@ImageView[id=null][text=null][desc=null][clickable=true][visibleToUser=true][width<150&&height<150] <2 FrameLayout[desc="float_widget_activity"] < FrameLayout <3 FrameLayout <3 [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/8cac3233-7ead-4f5e-9126-51a195788276',
          snapshotUrls: 'https://i.gkd.li/i/19667028',
        },
      ],
    },
  ],
});
