import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wacai365',
  name: '挖财记账',
  groups: [
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
