import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.appbyme.app283982',
  name: 'SDGun社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.appbyme.app283982:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13206391',
    },
  ],
});
