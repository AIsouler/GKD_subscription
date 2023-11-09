import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.wenku',
  name: '百度文库',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.baidu.wenku.splash.view.activity.WelcomeActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[id="com.baidu.wenku:id/jump_second"]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12520200',
        'https://i.gkd.li/import/import/12520204',
      ],
    },
  ],
});
