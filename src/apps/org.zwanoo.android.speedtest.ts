import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'org.zwanoo.android.speedtest',
  name: 'SpeedTest',
  groups: [
    {
      key: 1,
      name: '测速后广告',
      rules: [
        {
          key: 1,
          activityIds: 'com.ookla.mobile4.screens.main.MainViewActivity',
          quickFind: true,
          matches:
            '[id="org.zwanoo.android.speedtest:id/suite_completed_close_ad_button"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12893175',
        },
      ],
    },
  ],
});
