import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.masadoraandroid',
  name: '魔法集市 Global',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          matches: '[id="com.masadoraandroid:id/skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13578688',
        },
      ],
    },
  ],
});
