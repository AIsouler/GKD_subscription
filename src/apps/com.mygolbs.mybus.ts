import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mygolbs.mybus',
  name: '掌上公交',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      activityIds: [
        'com.mygolbs.mybus.RTimeActivity',
        'com.mygolbs.mybus.NewHomePageActivity',
        'com.mygolbs.mybus.StationsResultActivityNew',
        'com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity',
      ],
      rules: [
        {
          key: 1,
          name: '点击底部中间x关闭图标',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] RelativeLayout[childCount=4] > TextView[text.length>0] + ImageView + ImageView[clickable=true][id=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/12790521',
            'https://i.gkd.li/i/12790706',
            'https://i.gkd.li/i/12790841',
            'https://i.gkd.li/i/12790887',
          ],
        },
        {
          key: 2,
          name: '点击右上/下角x关闭图标',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] View[childCount=2||childCount=3] > View[childCount=4] > View[childCount=1] > Image[text=""]',
          snapshotUrls: [
            'https://i.gkd.li/i/12790656',
            'https://i.gkd.li/i/12790903',
          ],
        },
        {
          key: 3,
          name: '点击右上角x关闭图标-2',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] View[childCount=5] > View[childCount=2][index=4] > View[childCount=1] > Image[text=""]',
          snapshotUrls: 'https://i.gkd.li/i/12790610',
        },
        {
          key: 4,
          name: '点击右上角x关闭图标-3',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] View[childCount=2] > View[childCount=6][index=0] > View[childCount=1][index=3] > Image[text=""]',
          snapshotUrls: 'https://i.gkd.li/i/12790941',
        },
        {
          key: 5,
          name: '点击右下角x关闭按钮',
          matches:
            '[text="广告"] <3 View + @View[clickable=true] >2 [text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12791122',
        },
        {
          preKeys: [1, 2, 3, 4, 5],
          name: '点击不感兴趣',
          matches:
            '@LinearLayout[clickable=true][childCount<=2] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12790671',
            'https://i.gkd.li/i/12790551',
            'https://i.gkd.li/i/12790616',
            'https://i.gkd.li/i/12790707',
            'https://i.gkd.li/i/12790717',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity',
            'com.mygolbs.mybus.LoginActivity',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12790762',
            'https://i.gkd.li/i/14587392',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'ImageView[childCount=0] < LinearLayout < @LinearLayout[clickable=true] - * > [text="反馈"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ec768f05-5431-4684-af40-a7987dff2ec6',
          snapshotUrls: 'https://i.gkd.li/i/14546373',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.qq.e.ads.ADActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - [text="国货大牌 新年必囤"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f7dc0b47-b37f-409a-aebe-4aaa844aa897',
          snapshotUrls: 'https://i.gkd.li/i/14587397',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: [
            'com.mygolbs.mybus.NewHomePageActivity',
            'com.mygolbs.mybus.RTimeActivity',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14219270',
            'https://i.gkd.li/i/14572506',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-顶栏小广告',
      activityIds: 'com.mygolbs.mybus.RTimeActivity',
      rules: [
        {
          name: '点击右侧x关闭按钮',
          matches: '[id="com.mygolbs.mybus:id/ad_close2"]',
          snapshotUrls: 'https://i.gkd.li/i/12790841',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '自动点击"取消"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.defines.CustomDialog',
          matches: ['[text$="请开启通知权限"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/12715980',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-签到成功弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.mygolbs.mybus.guligold.SignSuccessActivity',
          matches:
            '@[id="com.mygolbs.mybus:id/iv_close"] < RelativeLayout - LinearLayout >n [text="签到成功"]',
          snapshotUrls: 'https://i.gkd.li/i/12716035',
        },
      ],
    },
  ],
});
