import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'windinfo.android',
  name: 'Wind金融终端',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'windinfo.android.LogoAdActivity',
      rules: '[id="windinfo.android:id/ivAdPass"]',
      snapshotUrls: 'https://i.gkd.li/import/12721428',
    },
  ],
});
