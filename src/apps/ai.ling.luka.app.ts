import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ai.ling.luka.app',
  name: 'Luka阅读养成',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="通知服务未开启"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/15796616',
        },
      ],
    },
  ],
});
