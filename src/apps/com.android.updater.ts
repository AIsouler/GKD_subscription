import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.updater',
  name: '系统更新',
  groups: [
    {
      key: 0,
      name: '更新提示-智能更新弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="开启智能更新"]', '[text="暂不开启"]'],
          snapshotUrls: 'https://i.gkd.li/i/15386937',
        },
      ],
    },
  ],
});
