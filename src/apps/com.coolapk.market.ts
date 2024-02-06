import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coolapk.market',
  name: '酷安',
  deprecatedKeys: [2],
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      excludeActivityIds: [
        'com.coolapk.market.view.search.', // 在搜索页面禁用
        'com.coolapk.market.view.feed.', // 在动态页面禁用
      ],
      rules: [
        {
          quickFind: true,
          key: 0,
          matches:
            '[id$="tt_splash_skip_btn"] <<n [id="com.coolapk.market:id/ad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12503773',
            'https://i.gkd.li/import/13247610',
            'https://i.gkd.li/import/13264779',
          ],
        },
        {
          quickFind: true,
          key: 1,
          matches: '[text^="跳过"][text.length<=4]',
          excludeMatches: '[id="com.coolapk.market:id/item_view"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12917990',
            'https://i.gkd.li/import/13211392',
            'https://i.gkd.li/import/13247733', // 误触
            'https://i.gkd.li/import/13247782', // 可能误触
            'https://i.gkd.li/import/13296816', // snapshot of excludeMatches
          ],
        },
        {
          key: 2,
          quickFind: true,
          matches:
            '@View[clickable=true] <(2,3) FrameLayout <2 FrameLayout <<n FrameLayout[id="com.coolapk.market:id/ad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13826359',
            'https://i.gkd.li/import/13827095',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-卡片广告',
      desc: '点击卡片右上角按钮->免广告-点击不感兴趣->选择关闭原因-点击不感兴趣',
      quickFind: true,
      activityIds: [
        'com.coolapk.market.view.main.MainActivity', // 缺少快照
        'com.coolapk.market.view.base.SimpleAlphaActivity', // 缺少快照
        'com.coolapk.market.view.node.DynamicNodePageActivity',
        'com.coolapk.market.view.feed.FeedDetailActivityV8',
      ],
      rules: [
        {
          key: 1,
          name: '点击右上角x按钮',
          matches:
            '[id="com.coolapk.market:id/ad_time_view"||id="com.coolapk.market:id/top_text_view"||id="com.coolapk.market:id/ad_text_view"] +n [id="com.coolapk.market:id/close_view"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12707506',
            'https://i.gkd.li/import/12642094',
            'https://i.gkd.li/import/12642148',
            'https://i.gkd.li/import/12774771',
            'https://i.gkd.li/import/13257987',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '去广告/免广告-点击不感兴趣',
          matches:
            'Button[text$="广告"] <n LinearLayout[childCount=2] > Button[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12707509',
            'https://i.gkd.li/import/12642132',
            'https://i.gkd.li/import/12642155',
            'https://i.gkd.li/import/12774753',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '选择关闭原因-点击不感兴趣',
          matches: ['@LinearLayout > TextView[text="不感兴趣"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/12472633',
            'https://i.gkd.li/import/12655713',
            'https://i.gkd.li/import/12660759',
            'https://i.gkd.li/import/12706437',
            'https://i.gkd.li/import/13786886', // 没有id
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
      quickFind: true,
      activityIds: 'com.coolapk.market.view.main.MainActivity',
      snapshotUrls: 'https://i.gkd.li/import/12503762',
      rules: '[text=`立即更新`] - [text=`取消`]',
    },
    {
      key: 3,
      name: '通知提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.coolapk.market.view.main.MainActivity',
      rules: '[text="去开启"] - [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13296465',
    },
  ],
});
