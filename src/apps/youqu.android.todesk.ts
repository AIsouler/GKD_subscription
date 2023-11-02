import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'youqu.android.todesk',
  name: 'ToDesk',
  groups: [
    {
      key: 1,
      name: '广告卡片',
      activityIds: 'youqu.android.todesk.activity.WelcomeActivity',
      quickFind: true,
      rules:
        '[id="youqu.android.todesk:id/sivDeviceBanner"] + [id="youqu.android.todesk:id/llClose"]',
      snapshotUrls: 'https://i.gkd.li/import/13228546',
    },
  ],
});
