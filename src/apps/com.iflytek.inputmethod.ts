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
      quickFind: true,
      activityIds:
        'com.iflytek.inputmethod.settingsnew.splash.activity.NewSplashActivity',
      rules: [
        {
          matches: '[id="com.iflytek.inputmethod.settingsnew:id/ll_skip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12906597',
        },
      ],
    },
  ],
});
