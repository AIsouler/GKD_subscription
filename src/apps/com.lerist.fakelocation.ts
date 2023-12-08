import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lerist.fakelocation',
  name: 'Fake Location',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13608967',
        },
      ],
    },
  ],
});
