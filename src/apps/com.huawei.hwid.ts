import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
    {
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
            '@[id*="interstitial_close"][clickable=true] +n * >n [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12709068',
            'https://i.gkd.li/i/24675884', //平板?
            'https://i.gkd.li/i/24979139',
          ],
        },
      ],
    },
  ],
});
