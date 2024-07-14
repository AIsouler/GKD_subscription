import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.phonemanager',
  name: 'OPPO手机管家',
  groups: [
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[text="取消"] < [id="com.coloros.phonemanager:id/buttonPanel"] > [text="更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13194979',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.coloros.phonemanager.clear.ClearMainActivity',
          matches: '[vid="ad_close"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/4d8b27a4-f129-479e-871b-bc6f664072ae',
          snapshotUrls: 'https://i.gkd.li/i/14317524',
        },
      ],
    },
  ],
});
