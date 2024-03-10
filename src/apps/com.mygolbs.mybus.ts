import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mygolbs.mybus',
  name: '掌上公交',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/f1099ff6-38aa-4393-8cf5-418ab8ffd20e',
          snapshotUrls: 'https://i.gkd.li/i/12745634',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/8b0c3f96-ae36-4799-87c2-1ea37c3d2d4c',
          snapshotUrls: [
            'https://i.gkd.li/i/12790485',
            'https://i.gkd.li/i/14546388',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-广告卡片',
      activityIds: [
        'com.mygolbs.mybus.RTimeActivity',
        'com.mygolbs.mybus.NewHomePageActivity',
        'com.mygolbs.mybus.StationsResultActivityNew',
        'com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity',
      ],
      rules: [
        {
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
          name: '点击右上/下角x关闭图标',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] View[childCount=2||childCount=3] > View[childCount=4] > View[childCount=1] > Image[text=""]',
          snapshotUrls: [
            'https://i.gkd.li/i/12790656',
            'https://i.gkd.li/i/12790903',
          ],
        },
        {
          name: '点击右上角x关闭图标-2',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] View[childCount=5] > View[childCount=2][index=4] > View[childCount=1] > Image[text=""]',
          snapshotUrls: 'https://i.gkd.li/i/12790610',
        },
        {
          name: '点击右上角x关闭图标-3',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] View[childCount=2] > View[childCount=6][index=0] > View[childCount=1][index=3] > Image[text=""]',
          snapshotUrls: 'https://i.gkd.li/i/12790941',
        },
        {
          name: '点击右下角x关闭按钮',
          matches:
            '[text="广告"] <3 View + @View[clickable=true] >2 [text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12791122',
        },
        {
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
        {
          name: '点击暂不领取',
          matches:
            '[id="com.mygolbs.mybus:id/ll_ad"] [id="com.mygolbs.mybus:id/btn_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12791579',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          name: '点击右上角x关闭图标',
          activityIds: [
            'com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity',
            'com.mygolbs.mybus.NewHomePageActivity',
          ],
          matches:
            'FrameLayout[childCount=2] > FrameLayout[childCount>4] > FrameLayout[index=1][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12790762',
            'https://i.gkd.li/i/14219270',
          ],
        },
        {
          key: 1,
          quickFind: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'ImageView[childCount=0] < LinearLayout < @LinearLayout[clickable=true] - * > [text="反馈"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ec768f05-5431-4684-af40-a7987dff2ec6',
          snapshotUrls: 'https://i.gkd.li/i/14546373',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-顶栏小广告',
      activityIds: ['com.mygolbs.mybus.RTimeActivity'],
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
      name: '通知提示-请求通知权限弹窗',
      desc: '自动点击"取消"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[id="com.mygolbs.mybus:id/message"][text$="请开启通知权限"]',
            '[id="com.mygolbs.mybus:id/view_neg"] > [id="com.mygolbs.mybus:id/negativeButton"][text="取消"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12715980',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-签到成功弹窗',
      desc: '自动点击x按钮',
      activityIds: 'com.mygolbs.mybus.guligold.SignSuccessActivity',
      rules:
        '@[id="com.mygolbs.mybus:id/iv_close"] < RelativeLayout - LinearLayout >n [text="签到成功"]',
      snapshotUrls: 'https://i.gkd.li/i/12716035',
    },
  ],
});
