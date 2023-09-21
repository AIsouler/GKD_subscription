import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sec.android.app.samsungapps',
  name: '三星应用商店',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.sec.android.app.samsungapps.notipopup.WebViewPopup'],
      rules: [
        {
          matches: '[id="com.sec.android.app.samsungapps:id/skip"]',
          snapshotUrls: ['https://gkd-kit.songe.li/import/12674484'],
        },
      ],
    },
  ],
});
