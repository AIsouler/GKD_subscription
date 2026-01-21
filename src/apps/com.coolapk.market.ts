import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      excludeActivityIds: [
        '.view.search.', // 在搜索页面禁用
        '.view.feed.', // 在动态页面禁用
        '.view.node.DynamicNodePageActivity',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12503773',
            'https://i.gkd.li/i/13247610',
            'https://i.gkd.li/i/13264779',
            'https://i.gkd.li/i/13826359',
            'https://i.gkd.li/i/13827095',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '[!(id="com.coolapk.market:id/item_view") && !(vid="card_view")] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12917990',
            'https://i.gkd.li/i/13211392',
            'https://i.gkd.li/i/23097140',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13247733',
            'https://i.gkd.li/i/13296816',
            'https://i.gkd.li/i/18245546',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-信息流广告',
      fastQuery: true,
      activityIds: [
        '.view.feed.FeedDetailActivityV8',
        '.view.main.MainActivity',
        '.view.node.DynamicNodePageActivity',
        '.view.base.SimpleAlphaActivity',
        '.view.search.SuperSearchResultActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[vid="close_view"] <<n [vid="coolapk_card_view"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19004644',
            'https://i.gkd.li/i/19004652',
            'https://i.gkd.li/i/19004663',
            'https://i.gkd.li/i/19005176',
            'https://i.gkd.li/i/20776874',
            'https://i.gkd.li/i/21693917',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14996359',
            'https://i.gkd.li/i/15159886',
            'https://i.gkd.li/i/15587119',
            'https://i.gkd.li/i/20768037',
          ],
        },
        {
          preKeys: [0, 2], // https://github.com/AIsouler/GKD_subscription/issues/1693
          key: 1,
          anyMatches: [
            '@[clickable=true] >(1,2) [text="不感兴趣"][visibleToUser=true]',
            '[text="不感兴趣"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19004649',
            'https://i.gkd.li/i/19643258',
            'https://i.gkd.li/i/19643262',
            'https://i.gkd.li/i/19534649',
            'https://i.gkd.li/i/20776872',
            'https://i.gkd.li/i/21693916',
            'https://i.gkd.li/i/23046625',
          ],
        },
        {
          preKeys: [0, 1], // 疑似酷安旧版本bug，点击不感兴趣后会再出现一个弹窗
          key: 2,
          matches: '[text="不感兴趣"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21036817',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          action: 'back',
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches: '[text="立即更新"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15511206',
        },
        {
          key: 1,
          matchTime: 10000,
          activityIds: '.view.main.MainActivity',
          matches: '[text="立即更新"]',
          exampleUrls: 'https://e.gkd.li/19b5d743-3632-4c64-8e51-b55c85070512',
          snapshotUrls: 'https://i.gkd.li/i/23096630',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.view.main.MainActivity',
            '.view.splash.SplashActivity',
          ],
          matches: '[text="去开启"] - [text="以后再说"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13296465',
            'https://i.gkd.li/i/20708984',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-[大家还下载了]应用推荐',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.view.search.SuperSearchResultActivity',
            '.view.node.DynamicNodePageActivity',
          ],
          matches: '[text="大家还下载了"] + [vid="close_view"]',
          exampleUrls: 'https://e.gkd.li/0cfa8038-dc74-46c3-9e06-998965d73711',
          snapshotUrls: [
            'https://i.gkd.li/i/16448265',
            'https://i.gkd.li/i/16448385',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.view.search.SuperSearchResultActivity',
          matches:
            '@[desc="关闭"] <<n [vid="item_view"] <<n [vid="to_native_ad_view"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/efd366d9-1c66-4c35-b164-6f91a623e2f2',
          snapshotUrls: 'https://i.gkd.li/i/19643150',
        },
      ],
    },
  ],
});
