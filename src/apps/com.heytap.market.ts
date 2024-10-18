import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
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
          fastQuery: true,
          matches: '@[clickable=true] > [text="跳过"]', // 全局规则无效，必须点击clickable=true的节点才能跳过
          snapshotUrls: 'https://i.gkd.li/i/14668997',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches:
            '[id="com.heytap.market:id/tv_titile"][text="发现软件商店新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13455965',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-右下角广告悬浮卡片',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
          matches: '@[desc="关闭"] <2 [vid="view_id_float_ad"]',
          exampleUrls:
            'https://m.gkd.li/57941037/51493144-2758-4bc7-b2b7-cc85c04c6cc1',
          snapshotUrls: 'https://i.gkd.li/i/14469932',
        },
      ],
    },
  ],
});
