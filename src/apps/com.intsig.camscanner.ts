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
  ],
});
