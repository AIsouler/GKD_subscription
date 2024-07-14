import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yikaobang.yixue',
  name: '医考帮',
  groups: [
    {
      key: 1,
      name: '全屏广告-会员活动弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.psychiatrygarden.activity.HomePageNewActivity',
      rules: [
        {
          matches: '@ImageView[id="com.yikaobang.yixue:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13425853',
        },
      ],
    },
  ],
});
