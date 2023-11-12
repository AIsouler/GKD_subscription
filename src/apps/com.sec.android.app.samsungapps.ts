import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sec.android.app.samsungapps',
  name: '三星应用商店',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.sec.android.app.samsungapps:id/skip"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12674484',
            'https://i.gkd.li/import/13324391',
          ],
        },
      ],
    },
  ],
});
