import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
          matches:
            '@Button[text="关闭"] <<n [id="com.xiaomi.market:id/webview"]',
          snapshotUrls: 'https://i.gkd.li/i/13248808',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-卡片广告',
      quickFind: true,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      rules: '[id="com.xiaomi.market:id/iv_close_tip"]',
      snapshotUrls: 'https://i.gkd.li/i/13197334',
    },
    {
      key: 10,
      name: '功能类-忽略升级',
      desc: '应用升级界面-自动点击忽略',
      quickFind: true,
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
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '升级软件后的"开启推送"弹窗',
          activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
          matches: '[vid="dialog_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/14814456',
        },
        {
          key: 1,
          name: '开启通知栏提醒',
          matchTime: 10000,
          matches: ['[text="开启通知栏提醒"]', '[text="不了，谢谢"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13197306',
            'https://i.gkd.li/i/13691701',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-个性化推荐卡片',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.xiaomi.market.business_ui.main.MarketTabActivity',
      rules: '[id="com.xiaomi.market:id/close_float_recommend"]',
      snapshotUrls: 'https://i.gkd.li/i/13624971',
    },
    {
      key: 13,
      name: '功能类-自动点击[查看全部升级]',
      desc: '应用升级页面',
      actionMaximum: 1,
      rules: [
        {
          quickFind: true,
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
