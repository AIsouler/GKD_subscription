import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.steampy.app',
  name: 'SteamPY',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.steampy.app:id/imgClose"] - RelativeLayout [id="com.steampy.app:id/tv_update"]',
      snapshotUrls: 'https://i.gkd.li/i/13695519',
    },
    {
      key: 2,
      name: '功能类-首页优惠券弹窗自动点击领取/使用',
      fastQuery: true,
      matchTime: 10000,
      rules: [
        {
          activityIds: '.activity.common.MainActivity',
          matches: '[vid="coupon_right"]',
          exampleUrls: [
            'https://e.gkd.li/2e87decb-54ba-4f8b-9330-f037c220d2d9',
            'https://e.gkd.li/b2e256c2-c606-430c-afa9-3cd02f4d56c2',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16860018',
            'https://i.gkd.li/i/16860017',
          ],
        },
      ],
    },
  ],
});
