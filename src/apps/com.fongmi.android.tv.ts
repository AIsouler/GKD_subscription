import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fongmi.android.tv',
  name: '影视',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.fongmi.android.tv:id/buttonPanel"] >2 [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/14035154',
        },
      ],
    },
  ],
});
