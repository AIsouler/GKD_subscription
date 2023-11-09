import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.iflytek.inputmethod',
  name: '讯飞输入法',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上方跳过按钮',
      matchLauncher: true,
      activityIds:
        'com.iflytek.inputmethod.settingsnew.splash.activity.NewSplashActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.iflytek.inputmethod.settingsnew:id/ll_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12906597',
        },
        {
          key: 1,
          matches:
            '[id="com.iflytek.inputmethod.minigame:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13054922',
        },
      ],
    },
  ],
});
