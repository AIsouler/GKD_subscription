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
          matches:
            '[text="以后再说" || text="不用了" || text="No thanks" || text="Not now"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14958783',
            'https://i.gkd.li/i/16079813',
            'https://i.gkd.li/i/17622043',
            'https://i.gkd.li/i/18135816',
            'https://i.gkd.li/i/18609168',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-不开启生物识别支付',
      desc: '点击[以后再说]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.finsky.billing.acquire.SheetUiBuilderHostActivity',
          matches: [
            '[text="要使用指纹或人脸验证购买交易吗？"]',
            '[text="以后再说"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23289407',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-隐私政策更新',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches: [
            '[text="更新 Google Play 隐私设置"]',
            '[text="知道了"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24982226',
        },
      ],
    },
  ],
});
