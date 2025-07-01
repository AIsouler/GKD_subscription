import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.mediacenter',
  name: '华为音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12901417',
            'https://i.gkd.li/i/12908742',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-VIP弹窗广告',
      desc: '点击底部圆形x图标关闭弹窗',
      activityIds: 'com.android.mediacenter.MainActivity',
      fastQuery: true,
      rules: '[id="com.android.mediacenter:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12914026',
    },
    {
      key: 2,
      name: '局部广告-推荐卡片广告',
      desc: '点击卡片右上角[广告],点击不感兴趣[直接关闭]',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击卡片右上角[广告]',
          activityIds: 'com.android.mediacenter.MainActivity',
          matches: '[id="com.android.mediacenter:id/ad_more_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/12914077',
        },
        {
          key: 1,
          name: '点击不感兴趣[直接关闭]',
          activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
          matches:
            '[id="com.android.mediacenter:id/label_title"][text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/12914078',
        },
      ],
    },
  ],
});
