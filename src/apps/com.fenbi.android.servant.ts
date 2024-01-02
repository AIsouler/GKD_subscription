import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fenbi.android.servant',
  name: '粉笔',
  groups: [
    {
      key: 1,
      name: '升级弹窗',
      activityIds: 'com.fenbi.android.module.home.HomeActivity',
      rules: [
        {
          matches: '[id="com.fenbi.android.servant:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/12999725',
        },
      ],
    },
  ],
});
