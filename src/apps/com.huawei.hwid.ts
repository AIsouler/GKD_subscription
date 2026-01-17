import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
    {
      // 我不知道这个广告从哪里来的，它出乎意料地跳出并覆盖在Gspace上面
      key: 0,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity',
            'com.huawei.openalliance.ad.ppskit.activity.InterstitialAdActivity',
          ],
          matches:
            '[id="com.huawei.hwid:id/interstitial_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12709068',
            'https://i.gkd.li/i/24675884', //平板?
          ],
        },
      ],
    },
  ],
});
