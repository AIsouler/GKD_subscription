import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tkaxv7s.xposed.sesame',
  name: '芝麻粒',
  groups: [
    {
      key: 1,
      name: '通知提示-提示弹窗',
      desc: '点击[我知道了]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'tkaxv7s.xposed.sesame.ui.MainActivity',
          matches: '[text="我知道了"]',
          exampleUrls:
            'https://m.gkd.li/57941037/75d1d639-5234-4ad4-865d-2b1617994a16',
          snapshotUrls: 'https://i.gkd.li/i/16060201',
        },
      ],
    },
  ],
});
