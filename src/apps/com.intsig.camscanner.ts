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
      snapshotUrls: 'https://i.gkd.li/i/12668813',
    },
    {
      key: 2,
      name: '全屏广告-免费试用',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.intsig.camscanner:id/iv_cancel"]',
      exampleUrls: 'https://e.gkd.li/5f628895-e214-4a0b-8344-14f3d8c20807',
      snapshotUrls: 'https://i.gkd.li/i/16761285',
    },
  ],
});
