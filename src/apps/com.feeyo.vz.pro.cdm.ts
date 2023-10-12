import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.feeyo.vz.pro.cdm',
  name: '飞常准业内版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.feeyo.vz.pro.activity.cdm.WelcomeActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12884347',
    },
  ],
});
