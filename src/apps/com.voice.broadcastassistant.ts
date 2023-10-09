import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.voice.broadcastassistant',
  name: '通知播报助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.voice.broadcastassistant.ui.activity.SplashActivity'],
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12843573',
        },
      ],
    },
  ],
});
