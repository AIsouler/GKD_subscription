import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      matchRoot: true,
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'clickCenter', // clickNode 可能无效
          activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
          matches: '@Button[clickable=true][text="关闭"] <<n [vid="webview"]',
          snapshotUrls: 'https://i.gkd.li/i/16323123',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
          matches: '[id="com.xiaomi.market:id/iv_close_tip"]',
          snapshotUrls: 'https://i.gkd.li/i/13197334',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-忽略升级',
      desc: '应用升级界面-自动点击忽略',
      fastQuery: true,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      rules: [
        {
          key: 1,
          excludeMatches: '[text="忽略本次"][visibleToUser=true]',
          matches: '[vid="expand_button"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14931577',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[text="忽略本次"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14931578',
        },
      ],
    },
    {
      key: 11,
      name: '权限提示-通知权限',
      desc: '自动点击关闭按钮',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '升级软件后的"开启推送"弹窗',
          activityIds: '.ui.UpdateListActivity',
          matches:
            '[vid="dialog_cancel" || text="不再提醒"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14814456',
            'https://i.gkd.li/i/19643114',
          ],
        },
        {
          key: 1,
          name: '开启通知栏提醒',
          matchTime: 10000,
          activityIds: '.business_ui.main.MarketTabActivity',
          matches: ['[text="开启通知栏提醒"]', '[text="不了，谢谢"]'],
          snapshotUrls: 'https://i.gkd.li/i/13691701',
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-个性化推荐卡片',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.market.business_ui.main.MarketTabActivity',
          matches: '[id="com.xiaomi.market:id/close_float_recommend"]',
          snapshotUrls: 'https://i.gkd.li/i/13624971',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-自动点击[查看全部升级]',
      desc: '应用升级页面',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
          matches: '@[clickable=true] > [text^="查看全部升级"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8549db1e-17a5-44e3-b657-1d2d712efd2a',
          snapshotUrls: 'https://i.gkd.li/i/14782814',
        },
      ],
    },
  ],
});
