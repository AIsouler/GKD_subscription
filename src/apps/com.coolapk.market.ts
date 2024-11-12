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
        'com.coolapk.market.view.search.', // 在搜索页面禁用
        'com.coolapk.market.view.feed.', // 在动态页面禁用
      ],
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
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
          matches: [
            '[id="com.coolapk.market:id/ad_container"][visibleToUser=true]',
            '[text*="跳过"][text.length<10][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12917990',
            'https://i.gkd.li/i/13211392',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13247733',
            'https://i.gkd.li/i/13296816',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-信息流广告',
      desc: '点击卡片右上角按钮->免广告-点击关闭->选择关闭原因-点击不感兴趣',
      matchRoot: true,
      fastQuery: true,
      activityIds: [
        'com.coolapk.market.view.main.MainActivity',
        'com.coolapk.market.view.node.DynamicNodePageActivity',
        'com.coolapk.market.view.feed.FeedDetailActivityV8',
        'com.bytedance.sdk.openadsdk.core.dislike.ui.f',
      ],
      rules: [
        {
          key: 1,
          name: '点击右上角x按钮',
          excludeMatches: [
            '[text="回复"] + [text="发布"]',
            '[text="创建收藏单"][visibleToUser=true]',
            '[vid="submit_view"][text="发布"]',
          ],
          matches: [
            '[text*="广告" || text="推广"][visibleToUser=true]',
            '[vid="close_view"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12707506',
            'https://i.gkd.li/i/12642094',
            'https://i.gkd.li/i/12642148',
            'https://i.gkd.li/i/12774771',
            'https://i.gkd.li/i/13257987',
            'https://i.gkd.li/i/17450282',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14996359', // 避免误触
            'https://i.gkd.li/i/15159886', // 避免误触
            'https://i.gkd.li/i/15587119', // 避免误触
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '点击[不感兴趣]/[关闭]',
          matches: '@[text="不感兴趣" || text="关闭"] <n * > [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14959519',
            'https://i.gkd.li/i/14964859',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '选择关闭原因-点击不感兴趣',
          matches: '@LinearLayout > TextView[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12472633',
            'https://i.gkd.li/i/12655713',
            'https://i.gkd.li/i/12660759',
            'https://i.gkd.li/i/12706437',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12503762',
      rules: '[text="立即更新"] - [text="取消"]',
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text="去开启"] - [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/13296465',
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
  ],
});
