import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xueqiu.android',
  name: '雪球',
  groups: [
    {
      key: 1,
      name: '局部广告-信息流广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.xueqiu.android.mainnesting.view.MainNestingActivity',
          matches: '[id="com.xueqiu.android:id/ad_close"]',
          exampleUrls:
            'https://m.gkd.li/33366298/d05d1eec-cda5-4d37-a494-8eef7b7871dd',
          snapshotUrls: 'https://i.gkd.li/i/13388227',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-评论区广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xueqiu.android.community.StatusDetailActivity',
          matches: '[id="com.xueqiu.android:id/ad_card_close"]',
          exampleUrls:
            'https://m.gkd.li/33366298/b223cc74-fd4f-45a2-89ab-4a18ddffc01c',
          snapshotUrls: 'https://i.gkd.li/i/13388361',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.mainnesting.view.MainNestingActivity',
          matches: '[vid="image_cancel"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5229142b-49d5-4985-ab75-104e46ede45e',
          snapshotUrls: 'https://i.gkd.li/i/22995479',
        },
      ],
    },
  ],
});
