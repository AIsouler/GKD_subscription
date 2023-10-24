import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chipsea.btcontrol',
  name: 'OKOK',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: 'com.chipsea.btcontrol.InitActivity',
      rules: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13115472',
    },
  ],
});
