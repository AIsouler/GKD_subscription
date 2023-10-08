import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shizhuang.duapp',
  name: '得物',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.shizhuang.duapp.modules.home.ui.SplashActivity',
      rules: [
        {
          matches: '[id="com.shizhuang.duapp:id/tv_countdown_bottom"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12841026',
        },
      ],
    },
  ],
});
