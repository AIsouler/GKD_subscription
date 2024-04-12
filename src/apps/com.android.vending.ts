import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.vending',
  name: 'Google Play 商店',
  groups: [
    {
      key: 1,
      name: '功能类-谷歌发送应用安全检查',
      desc: '点击不发送',
      rules: [
        {
          activityIds:
            'com.google.android.finsky.protectdialogs.activity.PlayProtectDialogsActivity',
          matches: '@View[clickable=true] > [text="不发送"]',
          snapshotUrls: 'https://i.gkd.li/i/14035144',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-[体验 Google Play Pass]弹窗',
      desc: '点击[以后再说]',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches: '[text^="体验 Google Play Pass"] +3 * > [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/14958783',
        },
      ],
    },
  ],
});
