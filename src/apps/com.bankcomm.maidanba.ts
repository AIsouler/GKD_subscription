import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bankcomm.maidanba',
  name: '买单吧',
  groups: [
    {
      key: 1,
      name: '评价提示-好评弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.account.activity.AutoLoginGuideActivity',
          matches: [
            '[text="给好评"][visibleToUser=true]',
            '[vid="rl_close"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/18a99aed-445a-4f4d-9b41-2e51f14ecc8b',
          snapshotUrls: 'https://i.gkd.li/i/18296891',
        },
      ],
    },
  ],
});
