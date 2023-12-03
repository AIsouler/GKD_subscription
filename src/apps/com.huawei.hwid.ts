import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      resetMatch: 'app',
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      rules: [
        {
          matches: '[id="com.huawei.hwid:id/hiad_skip_text"]',
          snapshotUrls: ['https://i.gkd.li/import/13520462'],
        },
      ],
    },
    {
      // 我不知道这个广告从哪里来的，它出乎意料地跳出并覆盖在Gspace上面
      key: 0,
      name: '页面中间跳出广告',
      activityIds: [
        'com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity',
      ],
      rules: [
        {
          matches: '[id="com.huawei.hwid:id/interstitial_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12709068'],
        },
      ],
    },
  ],
});
