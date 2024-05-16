import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
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
      name: '全屏广告-弹窗广告',
      desc: '点击[以后再说]',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '体验 Google Play Pass',
          position: {
            left: 'width * 0.5',
            top: 'width * 1.5',
          },
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches: '[text="体验 Google Play Pass，免费试用 1 个月"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14958783',
            'https://i.gkd.li/i/15286041',
          ],
        },
        {
          key: 1,
          name: '隆重推出 Google Play Points 计划',
          matches: '[text="以后再说"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15335350',
        },
      ],
    },
  ],
});
