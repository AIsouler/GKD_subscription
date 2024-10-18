import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.maintenancemaster',
  name: '维护大师',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
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
