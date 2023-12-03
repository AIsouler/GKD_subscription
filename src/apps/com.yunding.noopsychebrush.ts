import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yunding.noopsychebrush',
  name: 'Oclean Care',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      rules: '[id="com.yunding.noopsychebrush:id/btn_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13536134',
    },
  ],
});
