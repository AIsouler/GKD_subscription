import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
          matches:
            '@ImageView[clickable=true][desc=null] < [desc^="开启系统通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13538351',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-手机信息权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.maincontainer.activity.MainActivity',
          matches: ['[text*="手机信息权限"]', '[text="取消"]'],
          exampleUrls: 'https://e.gkd.li/81e3e4d8-f297-4476-b22c-73f0b97879ee',
          snapshotUrls: 'https://i.gkd.li/i/13620277',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.maincontainer.activity.MainActivity',
          matches: '[text="立即升级"] -2 [text="暂不升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13832272',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds:
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          matches:
            'WebView[text="Rax App"] > [id="root"] >6 View[index=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14551046',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.taobao.idlefish.search_implement.SearchResultActivity',
          matches:
            '@TextView[width<250 && height<250] - [childCount=0][text="收下红包"] <<n [vid="fish_layer_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/23125419',
        },
        {
          key: 2,
          name: '夜市氛围广告',
          fastQuery: true,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches:
            '@TextView[width<210 && height<210][clickable=true] <<n WebView[childCount!=0][text="夜市氛围弹框"] <<n [vid="fish_layer_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/23183586',
        },
      ],
    },
    // 该规则可能会出现多次触发一段后才能触发二段的情况，影响正常使用
    // {
    //   key: 5,
    //   name: '分段广告-信息流广告',
    //   forcedTime: 100000,
    //   activityIds: [
    //     'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
    //     'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
    //     '.search_implement.SearchResultActivity',
    //     '.maincontainer.activity.MainActivity',
    //   ],
    //   rules: [
    //     {
    //       key: 0,
    //       action: 'longClick',
    //       matches:
    //         '@View[longClickable=true][desc$="广告"][visibleToUser=true] > [desc!=null][visibleToUser=true]',
    //       snapshotUrls: 'https://i.gkd.li/i/19593497',
    //       excludeSnapshotUrls: 'https://i.gkd.li/i/19604467',
    //     },
    //     {
    //       key: 1,
    //       fastQuery: true,
    //       action: 'longClick',
    //       matches: '@[longClickable=true] >3 [text="广告"][visibleToUser=true]',
    //       exampleUrls: 'https://e.gkd.li/ca42e088-6fae-4402-a000-06418bf054cf',
    //       snapshotUrls: 'https://i.gkd.li/i/19603954',
    //     },
    //     {
    //       key: 2,
    //       fastQuery: true,
    //       action: 'longClick',
    //       activityIds: '.maincontainer.activity.MainActivity',
    //       matches:
    //         '@[longClickable=true][childCount=0][visibleToUser=true] < FrameLayout > [text="广告"][visibleToUser=true]',
    //       exampleUrls: 'https://e.gkd.li/738c623e-58fe-45a1-9a28-957f0f812c72',
    //       snapshotUrls: 'https://i.gkd.li/i/19604324',
    //     },
    //     {
    //       preKeys: [0, 1, 2],
    //       matches: '[desc="引起不适"][visibleToUser=true]',
    //       snapshotUrls: [
    //         'https://i.gkd.li/i/19593500',
    //         'https://i.gkd.li/i/19603913',
    //         'https://i.gkd.li/i/19604317',
    //       ],
    //     },
    //   ],
    // },
    {
      key: 6,
      name: '功能类-自动点击[查看原图]',
      rules: [
        {
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches: '[desc="查看原图"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/12b60303-4fb8-4786-b636-4efef10f3d78',
          snapshotUrls: 'https://i.gkd.li/i/15463399',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-关闭小额免密支付',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@CheckBox[checked=true] < * - [text*="免密支付"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22656242',
        },
      ],
    },
  ],
});
