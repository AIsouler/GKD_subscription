import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lbe.security.miui',
  name: '权限管理服务',
  groups: [
    {
      key: 1,
      name: '功能类-权限授予弹窗',
      desc: '自动点击"仅在使用中允许"',
      activityIds:
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      fastQuery: true,
      rules: '[text="仅在使用中允许"]',
      snapshotUrls: 'https://i.gkd.li/i/13761264',
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击拒绝',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: ['[text$="发送通知"]', '[text="拒绝"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/0487a113-5b57-402e-96ca-1f351e121d82',
          snapshotUrls: 'https://i.gkd.li/i/14321882',
        },
      ],
    },
  ],
});
