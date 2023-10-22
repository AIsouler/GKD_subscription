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
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12884347',
        },
        {
          key: 1,
          matches:
            '[id="com.feeyo.vz.pro.cdm:id/splashAdContainer"] >n [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12893753',
        },
      ],
    },
  ],
});
