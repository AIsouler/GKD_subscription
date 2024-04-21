import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ai.obc.cbn.app',
  name: '中国广电',
  groups: [
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id$="/ivDis"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12617201',
            'https://i.gkd.li/i/12655061',
          ],
        },
      ],
    },
  ],
});
