import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.intsig.camscanner',
  name: '扫描全能王',
  groups: [
    {
      key: 0,
      name: '全屏广告-开屏vip提示',
      activityIds: 'com.intsig.camscanner.guide.guidevideo.GuideVideoActivity',
      rules: '[id=`com.intsig.camscanner:id/tv_drop_cnl_close_new`]',
      // need snapshot
    },

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
