import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界校园',
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
          activityIds: '.activity.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
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
            '@ImageView[clickable=true] - RelativeLayout > [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/6882bcf4-1aa1-47e1-b7ad-299d4aa7bfd9',
          snapshotUrls: 'https://i.gkd.li/i/13554229',
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
          activityIds: '.activity.HomeActivity',
          matches:
            '@ImageView[childCount=0] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/2debed48-37f2-43ec-8b0f-3a5e06c23ed1',
          snapshotUrls: 'https://i.gkd.li/i/17378546',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: '.activity.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/f640d0c2-197d-45ef-98ff-58a04920bd2d',
          snapshotUrls: 'https://i.gkd.li/i/17358027',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.mvi.home.HomeActivity',
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup[childCount=1] <n ViewGroup <n ViewGroup - ViewGroup >3 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ca109fa3-5a7a-400d-911b-36dd8ac42656',
          snapshotUrls: 'https://i.gkd.li/i/22387192',
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
          matches:
            '@Image[childCount=0][visibleToUser=true][width<60&&height<60] < View[childCount=1] - View >3 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/22514469',
        },
        {
          preKeys: [0],
          fastQuery: true,
          matches: '@[clickable=true] > [text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22514499',
        },
      ],
    },
    {
      key: 12,
      name: '通知提示-公告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.mvi.home.HomeActivity',
          matches: '@ImageView[vid="dialog_close"] +n [text*="公告"]',
          snapshotUrls: 'https://i.gkd.li/i/22526467',
        },
      ],
    },
  ],
});
