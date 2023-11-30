import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hundsun.winner.pazq',
  name: '平安证券',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.hundsun.winner.pazq:id/tv_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13508287',
        },
      ],
    },
  ],
});
