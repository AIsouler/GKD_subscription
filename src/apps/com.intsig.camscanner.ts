import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.intsig.camscanner',
  name: '扫描全能王',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.intsig.camscanner.mainmenu.mainactivity.MainActivity',
      rules: '[id="com.intsig.camscanner:id/tv_skip_ad"]',
      snapshotUrls: 'https://i.gkd.li/import/12668795',
    },
    {
      key: 0,
      name: '开屏vip提示',
      activityIds: 'com.intsig.camscanner.guide.guidevideo.GuideVideoActivity',
      rules: '[id=`com.intsig.camscanner:id/tv_drop_cnl_close_new`]',
      // need snapshot
    },

    {
      key: 1,
      name: '主页面上方广告',
      activityIds: 'com.intsig.camscanner.mainmenu.mainactivity.MainActivity',
      rules:
        '[id="com.intsig.camscanner:id/card_ad_tag"] + [id="com.intsig.camscanner:id/card_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12668813',
    },
  ],
});
