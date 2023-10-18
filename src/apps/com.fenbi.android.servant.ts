import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fenbi.android.servant',
  name: '粉笔',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.fenbi.android.module.welcome.WelcomeActivity',
      rules: [
        {
          matches: '[id="com.fenbi.android.servant:id/count_down_view"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12999805',
        },
      ],
    },
    {
      key: 1,
      name: '升级弹窗',
      activityIds: 'com.fenbi.android.module.home.HomeActivity',
      rules: [
        {
          matches: '[id="com.fenbi.android.servant:id/close"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12999725',
        },
      ],
    },
  ],
});
