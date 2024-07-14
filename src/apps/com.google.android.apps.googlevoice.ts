import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.googlevoice',
  name: 'Voice',
  groups: [
    {
      key: 10,
      name: '功能类-跳过实体号码链接',
      fastQuery: true,
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
            'https://i.gkd.li/i/13314255',
            'https://i.gkd.li/i/13437190',
          ],
        },
      ],
    },
  ],
});
