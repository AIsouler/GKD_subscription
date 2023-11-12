import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.p1.mobile.putong',
  name: '探探',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12866488',
        'https://i.gkd.li/import/13324185',
      ],
    },
  ],
});
