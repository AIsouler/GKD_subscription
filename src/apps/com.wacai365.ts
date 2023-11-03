import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wacai365',
  name: '挖财记账',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: [
        'com.wacai365.HomeActivity',
        'com.wacai.android.wind.splash.WindDialogActivity',
      ],
      rules: [
        {
          matches: '[id="com.wacai365:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13162861',
        },
        {
          matches: '[id$="id/tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13177538',
            'https://gkd-kit.gitee.io/import/13194893',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '新版本提示',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.wacai365.HomeActivity',
      rules:
        '@ImageView[id="com.wacai365:id/tv_cancel"] - TextView[text^="新版本"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13249620',
    },
    {
      enable: false,
      key: 2,
      name: '弹窗广告',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.wacai365.HomeActivity',
      rules: '[id^="com.wacai365:id/promote_banner_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13249666',
    },
  ],
});
