import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuaiduizuoye.scan',
  name: '快对',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.kuaiduizuoye.scan.activity.init.InitActivity',
      rules:
        '[id="com.kuaiduizuoye.scan:id/fl_ad_container"] >n [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12716275',
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: 'com.hihonor.android.launcher.drawer.DrawerLauncher',
      rules: '[id="com.kuaiduizuoye.scan:id/iv_advertisement_widget_close"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12716285',
    },
  ],
});
