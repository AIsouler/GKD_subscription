import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/iv_close" || vid="ad_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673231',
            'https://i.gkd.li/i/12673523',
            'https://i.gkd.li/i/13166472',
            'https://i.gkd.li/i/22437128',
            'https://i.gkd.li/i/22449070',
            'https://i.gkd.li/i/22495266',
            'https://i.gkd.li/i/22495298',
            'https://i.gkd.li/i/22495361',
            'https://i.gkd.li/i/22508959',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: ['.activity.HomeActivity', '.mvi.home.HomeActivity'],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/a7753ec9-5382-42ee-9a41-b4e2b61b9050',
          snapshotUrls: 'https://i.gkd.li/i/17355585',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            '.activity.HomeActivity',
            '.ui.AdActivity',
            '.mvi.home.HomeActivity',
          ],
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1][visibleToUser=true] < ViewGroup <n ViewGroup <n ViewGroup  >n [text="广告"]',
          exampleUrls: 'https://e.gkd.li/cb21dc41-bcca-47ec-ae0a-df9aedde48b5',
          snapshotUrls: [
            'https://i.gkd.li/i/12826124',
            'https://i.gkd.li/i/13228216',
            'https://i.gkd.li/i/13601132',
            'https://i.gkd.li/i/22427117',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][width<110 && height<110] - RelativeLayout >(1,2) [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/6882bcf4-1aa1-47e1-b7ad-299d4aa7bfd9',
          snapshotUrls: [
            'https://i.gkd.li/i/13554229',
            'https://i.gkd.li/i/22960459',
          ],
        },
        {
          key: 4,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
          matches:
            '@[text="跳过"][clickable=true] +3 RelativeLayout >2 [text="点击跳转至第三方页面"]',
          snapshotUrls: 'https://i.gkd.li/i/12673349',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: ['.activity.HomeActivity', '.mvi.home.HomeActivity'],
          matches:
            '@ImageView[childCount=0] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/2debed48-37f2-43ec-8b0f-3a5e06c23ed1',
          snapshotUrls: [
            'https://i.gkd.li/i/17378546',
            'https://i.gkd.li/i/23145860',
          ],
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: [
            '.activity.HomeActivity',
            '.mvi.home.HomeActivity',
            '.mvi.notice.NoticeListActivity',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/f640d0c2-197d-45ef-98ff-58a04920bd2d',
          snapshotUrls: [
            'https://i.gkd.li/i/17358027',
            'https://i.gkd.li/i/23206013',
            'https://i.gkd.li/i/23455815',
          ],
        },
        {
          key: 7,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][width<80 && height<80] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text="反馈"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22946236',
        },
        {
          key: 8,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][width<100 && height<100] <2 RelativeLayout < RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/22946242',
        },
        {
          key: 9,
          fastQuery: true,
          activityIds: '.mvi.home.HomeActivity',
          matches:
            '@Image[text=""][childCount=0][width<70 && height<70] < View[childCount=1] + * >2 [childCount=0][text="淘宝精选广告"] <<n [vid="fl_native"]',
          snapshotUrls: 'https://i.gkd.li/i/23254520',
        },
        {
          key: 10,
          fastQuery: true,
          activityIds: '.mvi.me.VipPayActivity',
          matches:
            '@[desc="top_close_button"][clickable=true] < * + * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/23255102',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      activityIds: '.mvi.home.HomeActivity',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] <<n * >4 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/ca109fa3-5a7a-400d-911b-36dd8ac42656',
          snapshotUrls: [
            'https://i.gkd.li/i/22387192',
            'https://i.gkd.li/i/22656913',
            'https://i.gkd.li/i/22863607',
            'https://i.gkd.li/i/23087561',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@Image[childCount=0] < [childCount=1] <n * - * >3 [childCount=0][text="广告"] <<n [vid="fl_native"]',
          snapshotUrls: 'https://i.gkd.li/i/22585927',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.mvi.home.HomeActivity',
          matches: '[vid="ksad_ad_dislike"]',
          snapshotUrls: 'https://i.gkd.li/i/23054142',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.mvi.home.HomeActivity',
          matches:
            '@ImageView[width<70 && height<70][childCount=0] < FrameLayout[childCount=1] - * > TextView[childCount=0][text.length>0] <<n [vid="fl_native"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23289399',
            'https://i.gkd.li/i/23289402',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.mvi.home.HomeActivity',
          matches:
            '@[id="com.kwad.dy.sdk:id/ksad_ad_dislike"][clickable=true] - * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/23773011',
        },
      ],
    },
    {
      key: 11,
      name: '分段广告-卡片广告',
      desc: '点击关闭-不感兴趣',
      activityIds: '.mvi.home.HomeActivity',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '@Image[childCount=0][width<70&&height<70][id=null][text=""][desc=null] < View[childCount=1][parent.childCount!=2] <n View <n View >n [childCount=0][text="广告"] <<n [vid="fl_native"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22514469',
            'https://i.gkd.li/i/22691578',
            'https://i.gkd.li/i/22798099',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@TextView[text="···"][visibleToUser=true] <n * >3 [childCount=0][text="广告"] <<n [vid="fl_native"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22861405',
            'https://i.gkd.li/i/23451517',
          ],
        },
        {
          preKeys: [0, 1],
          fastQuery: true,
          matches:
            '@[clickable=true] >(1,2) [text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22514499',
            'https://i.gkd.li/i/22691590',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '通知提示-公告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: ['.mvi.home.HomeActivity', '.mvi.splash.AdActivity'],
          matches: '@ImageView[vid="dialog_close"] +n [text*="公告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22526467',
            'https://i.gkd.li/i/23883452',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.mvi.home.HomeActivity',
          matches: '[vid="iv"] + [vid="iv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/23205159',
        },
      ],
    },
    {
      key: 13,
      name: '权限提示-不开启可选权限',
      desc: '点击[暂不开启，继续跑步]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.mvi.home.HomeActivity',
          matches: [
            '[text="必要权限未开启！" || text^="当前必要权限不完整"]',
            '[text^="暂不开启"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23054372',
            'https://i.gkd.li/i/23054373',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '权限提示-定位权限',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.mvi.home.HomeActivity',
          matches: [
            '[text="定位服务未开启"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/3be509e1-0663-4989-b763-6d68d88979fe',
          snapshotUrls: 'https://i.gkd.li/i/23096707',
        },
      ],
    },
  ],
});
