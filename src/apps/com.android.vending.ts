import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.vending',
  name: 'Google Play 商店',
  groups: [
    {
      key: 1,
      name: '功能类-Play保护机制弹窗',
      desc: '点击[不发送]/[拒绝]',
      rules: [
        {
          activityIds:
            'com.google.android.finsky.protectdialogs.activity.PlayProtectDialogsActivity',
          matches:
            '[text*="保护机制"] +3 @View[clickable=true] > [text="不发送" || text="拒绝"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14035144',
            'https://i.gkd.li/i/17375098',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击[以后再说]',
      fastQuery: true,
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
          position: {
            left: 'width * 0.5',
            top: 'width * 1.625',
          },
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches: '[text="隆重推出 Google Play Points 计划"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15335350',
            'https://i.gkd.li/i/16397947',
          ],
        },
        {
          key: 2,
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches: ['[text*="推荐内容"]', '[text="不用了"]'],
          snapshotUrls: 'https://i.gkd.li/i/16079813',
        },
      ],
    },
  ],
});
