import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mygolbs.mybus',
  name: '掌上公交',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mygolbs.mybus.LoginActivity',
      rules: [
        {
          matches:
            '[id="com.mygolbs.mybus:id/splash_container"||id="com.mygolbs.mybus:id/adsRl"] [text^="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12745634',
            'https://i.gkd.li/import/12790377',
          ],
        },
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12790485',
        },
      ],
    },
    {
      key: 1,
      name: '广告卡片',
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
            'https://i.gkd.li/import/12790521',
            'https://i.gkd.li/import/12790706',
            'https://i.gkd.li/import/12790841',
            'https://i.gkd.li/import/12790887',
          ],
        },
        {
          name: '点击右上/下角x关闭图标',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] View[childCount=2||childCount=3] > View[childCount=4] > View[childCount=1] > Image[text=""]',
          snapshotUrls: [
            'https://i.gkd.li/import/12790656',
            'https://i.gkd.li/import/12790903',
          ],
        },
        {
          name: '点击右上角x关闭图标-2',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] View[childCount=5] > View[childCount=2][index=4] > View[childCount=1] > Image[text=""]',
          snapshotUrls: 'https://i.gkd.li/import/12790610',
        },
        {
          name: '点击右上角x关闭图标-3',
          matches:
            '[id="com.mygolbs.mybus:id/ad_frameLayout"] View[childCount=2] > View[childCount=6][index=0] > View[childCount=1][index=3] > Image[text=""]',
          snapshotUrls: 'https://i.gkd.li/import/12790941',
        },
        {
          name: '点击右下角x关闭按钮',
          matches:
            '[text="广告"] <3 View + @View[clickable=true] >2 [text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12791122',
        },
        {
          name: '点击不感兴趣',
          matches:
            '@LinearLayout[clickable=true][childCount<=2] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12790671',
            'https://i.gkd.li/import/12790551',
            'https://i.gkd.li/import/12790616',
            'https://i.gkd.li/import/12790707',
            'https://i.gkd.li/import/12790717',
          ],
        },
        {
          name: '点击暂不领取',
          matches:
            '[id="com.mygolbs.mybus:id/ll_ad"] [id="com.mygolbs.mybus:id/btn_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/12791579',
        },
      ],
    },
    {
      key: 2,
      name: '广告弹窗',
      activityIds: ['com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity'],
      rules: [
        {
          name: '点击右上角x关闭图标',
          matches:
            '[id="android:id/content"] >3 FrameLayout[childCount=6][index=0] > FrameLayout[childCount=1][index=1] > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12790762',
        },
      ],
    },
    {
      key: 3,
      name: '顶栏小广告',
      activityIds: ['com.mygolbs.mybus.RTimeActivity'],
      rules: [
        {
          name: '点击右侧x关闭按钮',
          matches: '[id="com.mygolbs.mybus:id/ad_close2"]',
          snapshotUrls: 'https://i.gkd.li/import/12790841',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击【取消】',
      activityIds: 'com.mygolbs.mybus.defines.CustomDialog',
      rules: [
        {
          matches: [
            '[id="com.mygolbs.mybus:id/message"][text$="请开启通知权限"]',
            '[id="com.mygolbs.mybus:id/view_neg"] > [id="com.mygolbs.mybus:id/negativeButton"][text="取消"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12715980',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '签到成功弹窗',
      desc: '自动点击x按钮',
      activityIds: 'com.mygolbs.mybus.guligold.SignSuccessActivity',
      rules:
        '@[id="com.mygolbs.mybus:id/iv_close"] < RelativeLayout - LinearLayout >n [text="签到成功"]',
      snapshotUrls: 'https://i.gkd.li/import/12716035',
    },
  ],
});
