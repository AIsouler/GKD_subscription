import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ai.obc.cbn.app',
  name: '中国广电',
  deprecatedKeys: [0],
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
            'https://i.gkd.li/import/12617201',
            'https://i.gkd.li/import/12655061',
          ],
        },
      ],
    },
  ],
});
