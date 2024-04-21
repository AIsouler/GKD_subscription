import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.woaika.kashen',
  name: '我爱卡',
  groups: [
    {
      key: 1,
      name: '定位提示',
      desc: '点击"暂不"',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.woaika.kashen.ui.WIKHomeActivity',
          matches: '[id="android:id/button2"][text="暂不"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ae172e3f-42e2-4de2-8bd5-de7eb624c359',
          snapshotUrls: 'https://i.gkd.li/i/14070846',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-请求位置、存储权限',
      desc: '点击"我知道了"',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="tvPermissionDescDialogConfirm"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6faf1f01-5b77-414b-91d8-98dcb5673f7c',
          snapshotUrls: 'https://i.gkd.li/i/14070836',
        },
      ],
    },
  ],
});
