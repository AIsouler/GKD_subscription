import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.translate',
  name: 'Google翻译',
  groups: [
    {
      key: 4,
      name: '功能类-登录弹窗',
      desc: '登录备份翻译记录',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.google.android.apps.translate.TranslateActivity',
      rules:
        'Button[id="com.google.android.apps.translate:id/sign_in_button"] + [id="com.google.android.apps.translate:id/secondary_action_button"]',
      snapshotUrls: 'https://i.gkd.li/i/13495796',
    },
  ],
});
