import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.waimaiii.waimaiii',
  name: '歪麦霸王餐',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sangshen.ad_jg_flutter_sdk.SplashAdActivity',
      rules: [
        {
          matches:
            'View > View[childCount=2] > ImageView[clickable=true] + ImageView[id=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13346187',
        },
      ],
    },
  ],
});
