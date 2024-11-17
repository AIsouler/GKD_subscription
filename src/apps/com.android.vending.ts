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
      desc: '点击[以后再说]/[不用了]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.75',
          },
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches:
            '@LinearLayout[childCount=0][visibleToUser=true] -3 [text^="体验" || text^="隆重推出"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15286041',
            'https://i.gkd.li/i/16397947',
          ],
        },
        {
          key: 2,
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches: '[text="以后再说" || text="不用了"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14958783',
            'https://i.gkd.li/i/16079813',
            'https://i.gkd.li/i/17622043',
          ],
        },
      ],
    },
  ],
});
