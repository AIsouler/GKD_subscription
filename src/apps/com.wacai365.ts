import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wacai365',
  name: '挖财记账',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[id="com.wacai365:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://i.gkd.li/import/13162861',
        },
        {
          key: 1,
          matches: '[id$="id/tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13177538',
            'https://i.gkd.li/import/13194893',
          ],
        },
        {
          key: 2,
          quickFind: true,
          matches: '[text^="跳过"][text.length<=6]',
          snapshotUrls: 'https://i.gkd.li/import/13399124',
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '新版本提示',
      quickFind: true,
      actionMaximum: 1,
      activityIds: [
        'com.wacai365.HomeActivity',
        'com.wacai.android.wind.splash.WindDialogActivity',
      ],
      rules:
        '@ImageView[id="com.wacai365:id/tv_cancel"] - TextView[text^="新版本"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13249620', //com.wacai365.HomeActivity
        'https://i.gkd.li/import/13772291', //com.wacai.android.wind.splash.WindDialogActivity
      ],
    },
    {
      enable: false,
      key: 2,
      name: '弹窗广告',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.wacai365.HomeActivity',
      rules: '[id^="com.wacai365:id/promote_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13249666',
    },
  ],
});
