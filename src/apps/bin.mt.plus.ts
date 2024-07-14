import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bin.mt.plus',
  name: 'MT管理器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="更新"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/16050794',
        },
      ],
    },
  ],
});
