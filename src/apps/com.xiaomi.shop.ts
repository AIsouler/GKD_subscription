import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.xiaomi.shop2.activity.MainActivity',
            'com.xiaomi.shop.plugin.homepage.utils.AdDialog',
          ],
          matches:
            '[id="android:id/content"] > RelativeLayout > LinearLayout[childCount=2] > ImageView[index=1][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12649330',
            'https://i.gkd.li/i/14393039',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.shop2.activity.MainActivity',
          matches:
            '[id="com.xiaomi.shop.plugin.homepage:id/home_bottom_float_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/15528092',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          position: {
            left: 'width * 0.3509',
            top: 'width * 1.4046',
          },
          activityIds: '.lib.ForceUpdateActivity',
          matches:
            '@LinearLayout[childCount=0] < [id="android:id/content"][childCount=1] < [vid="action_bar_root"]',
          snapshotUrls: 'https://i.gkd.li/i/19547338',
        },
      ],
    },
  ],
});
