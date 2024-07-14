import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.servyouappzhuhai',
  name: '广东税务',
  groups: [
    {
      key: 0,
      name: '权限提示-通知权限',
      fastQuery: true,
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
