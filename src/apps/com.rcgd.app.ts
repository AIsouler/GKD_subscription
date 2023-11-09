import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.rcgd.app',
  name: 'Roco攻略',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.rcgd.app:id/ad_dcloud_main_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13308491',
    },
  ],
});
