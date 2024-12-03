import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.photos',
  name: '谷歌相册',
  groups: [
    {
      key: 0,
      name: '更新提示',
      desc: '点击[以后再说]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.update.treatment.UpdateAppTreatmentPromoPageActivity',
          matches: '[text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13218940',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-优惠提示',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.photos.cloudstorage.paidfeatures.PaidFeaturesActivity',
          matches:
            '@[desc="转到上一层级"] < ViewGroup[id="com.google.android.apps.photos:id/toolbar"]',
          snapshotUrls: 'https://i.gkd.li/i/13774247',
        },
      ],
    },
  ],
});
