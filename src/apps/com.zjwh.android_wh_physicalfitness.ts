import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c1fa3f37-1617-4d0a-86d3-07fdd154766f',
          snapshotUrls: 'https://i.gkd.li/i/12673495',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '优量汇广告',
          activityIds: [
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
            'com.zjwh.android_wh_physicalfitness.ui.AdActivity',
          ],
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673231',
            'https://i.gkd.li/i/12673523',
            'https://i.gkd.li/i/13166472',
          ],
        },
        {
          key: 1,
          name: '腾讯SDK',
          fastQuery: true,
          activityIds: '.activity.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/a7753ec9-5382-42ee-9a41-b4e2b61b9050',
          snapshotUrls: 'https://i.gkd.li/i/17355585',
        },
        {
          key: 2,
          name: '快手SDK',
          fastQuery: true,
          activityIds: ['.activity.HomeActivity', '.ui.AdActivity'],
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup +(3,5) ViewGroup[childCount=2] > [text="广告"]',
          exampleUrls: 'https://e.gkd.li/cb21dc41-bcca-47ec-ae0a-df9aedde48b5',
          snapshotUrls: [
            'https://i.gkd.li/i/12826124',
            'https://i.gkd.li/i/13228216',
            'https://i.gkd.li/i/13601132',
          ],
        },
        {
          key: 3,
          name: '百度SDK',
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true] - RelativeLayout > [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/6882bcf4-1aa1-47e1-b7ad-299d4aa7bfd9',
          snapshotUrls: 'https://i.gkd.li/i/13554229',
        },
        {
          key: 4,
          name: '百青藤广告',
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
  ],
});
