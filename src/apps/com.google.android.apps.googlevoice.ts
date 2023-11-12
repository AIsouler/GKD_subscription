import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.apps.googlevoice',
  name: 'Voice',
  groups: [
    {
      key: 10,
      enable: false,
      name: '跳过实体号码链接',
      quickFind: true,
      activityIds: 'com.google.android.apps.voice.promo.PromoActivity',
      rules: [
        {
          matches: [
            '[text="Link this device to Google Voice"]',
            '[id="com.google.android.apps.googlevoice:id/skip_button"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13314255',
        },
      ],
    },
  ],
});
