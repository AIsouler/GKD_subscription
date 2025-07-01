import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cubic.autohome',
  name: '汽车之家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.cubic.autohome.MainActivity',
          matches: '[id="com.cubic.autohome:id/operate_show_exit_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/12836324',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-右下角领福利悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.cubic.autohome.MainActivity',
          matches:
            '@ImageView[visibleToUser=true] < * <2 * - [id="android:id/tabhost"]',
          snapshotUrls: 'https://i.gkd.li/i/13885414',
        },
      ],
    },
  ],
});
