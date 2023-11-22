import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dangdang.buy2',
  name: '当当',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '【跳过】',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13424651',
        },
      ],
    },
  ],
});
