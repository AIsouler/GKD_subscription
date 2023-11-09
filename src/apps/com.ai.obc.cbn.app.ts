import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ai.obc.cbn.app',
  name: '中国广电',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: [
        'com.ai.obc.cbn.app.ui.other.activity.SplashActivity',
        'com.android.launcher.Launcher',
      ],
      rules: [
        {
          matches: '[id="com.ai.obc.cbn.app:id/tvTg"]',
          snapshotUrls:
            'https://i.gkd.li/import/import/22029832/3d58f8d5-bb6a-464a-88f7-5a27c5e0854c',
        },
      ],
    },
    {
      key: 2,
      name: '版本弹窗',
      activityIds: [
        'com.ai.obc.cbn.app.ui.other.activity.MainActivity',
        'com.ai.obc.cbn.app.ui.main.fragment.MainFragment',
      ],
      rules: [
        {
          matches: '[id$="/ivDis"]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12617201',
            'https://i.gkd.li/import/import/12655061',
          ],
        },
      ],
    },
  ],
});
