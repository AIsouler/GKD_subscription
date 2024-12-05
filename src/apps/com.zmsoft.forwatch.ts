import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zmsoft.forwatch',
  name: '子腾园',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.zmapp.fwatch.activity.NativeAdActivity',
          matches: '[id="com.zmsoft.forwatch:id/ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13545995',
        },
      ],
    },
  ],
});
