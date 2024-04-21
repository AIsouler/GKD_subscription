import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.servyouappzhuhai',
  name: '广东税务',
  groups: [
    {
      key: 0,
      name: '通知提示-通知权限授权弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.example.servyouappzhuhai:id/btn_dialog_negtive"]',
          snapshotUrls: 'https://i.gkd.li/i/13440721',
        },
      ],
    },
  ],
});
