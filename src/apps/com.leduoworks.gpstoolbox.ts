import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.leduoworks.gpstoolbox',
  name: 'GPS工具箱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      activityIds: 'com.leduoworks.gpstoolbox.newest.StarterActivity',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13062600',
    },
    {
      key: 1,
      name: '首页占位广告',
      activityIds: 'com.leduoworks.gpstoolbox.frmt.MainFrmtActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.leduoworks.gpstoolbox:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13062612',
    },
  ],
});
