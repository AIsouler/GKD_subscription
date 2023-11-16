import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.djttw.news',
  name: '党建头条',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      actionDelay: 200,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="跳过"]',
          exampleUrls:
            'https://m.gkd.li/6328439/3434673a-67eb-4c81-8fd3-c69dfa8d00db',
          snapshotUrls: 'https://i.gkd.li/import/13359665',
        },
      ],
    },
  ],
});
