import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.leos.appstore',
  name: '联想应用中心',
  groups: [
    {
      key: 0,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules:
        '@[id="com.lenovo.leos.appstore:id/dialog_cancel"] + [text$="版本更新"]',
      snapshotUrls: 'https://i.gkd.li/i/13401992',
    },
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text$="打开应用中心通知"]', '[text="知道了"]'],
          snapshotUrls: 'https://i.gkd.li/i/13401991',
        },
      ],
    },
  ],
});
