import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.beisen.italent',
  name: '北森italent',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13554892',
        },
      ],
    },
  ],
});
