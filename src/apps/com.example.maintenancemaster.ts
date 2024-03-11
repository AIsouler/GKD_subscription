import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.example.maintenancemaster',
  name: '维护大师',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.example.maintenancemaster:id/advertisement_countdown_ccd"]',
          snapshotUrls: 'https://i.gkd.li/i/12903877',
        },
      ],
    },
  ],
});
