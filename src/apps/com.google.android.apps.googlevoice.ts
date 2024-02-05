import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.apps.googlevoice',
  name: 'Voice',
  groups: [
    {
      key: 10,
      enable: false,
      name: '功能类-跳过实体号码链接',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.google.android.apps.voice.promo.PromoActivity',
        'com.google.android.apps.voice.verification.procedure.VerificationActivity',
      ],
      rules: [
        {
          matches: [
            '[id="com.google.android.apps.googlevoice:id/title_view"][text="Link this device to Google Voice" || text="将此设备与 Google Voice 关联"]',
            '[id="com.google.android.apps.googlevoice:id/skip_button"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13314255',
            'https://i.gkd.li/import/13437190',
          ],
        },
      ],
    },
  ],
});
