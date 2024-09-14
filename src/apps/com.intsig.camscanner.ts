import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.intsig.camscanner',
  name: '扫描全能王',
  groups: [
    {
      key: 1,
      name: '局部广告-主页面上方广告',
      activityIds: 'com.intsig.camscanner.mainmenu.mainactivity.MainActivity',
      rules:
        '[id="com.intsig.camscanner:id/card_ad_tag"] + [id="com.intsig.camscanner:id/card_close"]',
      exampleUrls: 'https://e.gkd.li/772a24be-ca12-459f-8abf-e9573cde3f56',
      snapshotUrls: 'https://i.gkd.li/i/12668813',
    },
    {
      key: 2,
      name: '全屏广告-开通会员', // 该广告在开屏完成后立即弹出
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0, // 无`activityId`
          matches: '[vid="iv_cancel"]',
          fastQuery: true,
          exampleUrls: 'https://e.gkd.li/5f628895-e214-4a0b-8344-14f3d8c20807',
          snapshotUrls: 'https://i.gkd.li/i/16761285',
        },
        {
          key: 1,
          activityIds: '.guide.CancelAdShowCnGuidePurchaseActivity',
          matches: '[vid="iv_drop_cnl_close"]',
          fastQuery: true,
          exampleUrls: 'https://e.gkd.li/e9a6775a-be51-4aca-b3cd-0b496efe2f0c',
          snapshotUrls: 'https://i.gkd.li/i/17002087',
        },
      ],
    },
    {
      key: 3,
      name: '其他-关闭[发现新截图]提示',
      fastQuery: true,
      activityIds: '.mainmenu.mainactivity.MainActivity',
      rules: 'RelativeLayout[vid="rl_screenshot"] + ImageView[vid="iv_esc"]',
      exampleUrls: 'https://e.gkd.li/c66080aa-1758-4a69-9752-aa1373d7f2b5',
      snapshotUrls: 'https://i.gkd.li/i/16975714',
    },
  ],
});
