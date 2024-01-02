import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuaiduizuoye.scan',
  name: '快对',
  groups: [
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: 'com.hihonor.android.launcher.drawer.DrawerLauncher',
      rules: '[id="com.kuaiduizuoye.scan:id/iv_advertisement_widget_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12716285',
    },
  ],
});
