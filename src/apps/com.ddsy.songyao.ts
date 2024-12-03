import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ddsy.songyao',
  name: '叮当快药',
  groups: [
    {
      key: 1,
      name: '全屏广告-优惠卷提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ddsy.songyao.activity.SplashActivity',
          matches:
            '[id="com.ddsy.songyao:id/iv_coupon_bottom"] + [id="com.ddsy.songyao:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13048720',
        },
      ],
    },
  ],
});
