import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fenbi.android.solar',
  name: '小猿搜题',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      resetMatch: 'app',
      rules: '[id="com.fenbi.android.solar:id/btn_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13631841',
    },
    {
      key: 1,
      name: '升级提示',
      matchLauncher: true,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: [
            '[id="com.fenbi.android.solar:id/text_upgrade"]',
            '[id="com.fenbi.android.solar:id/img_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13246056',
        },
      ],
    },
  ],
});
