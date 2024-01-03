import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.manmanbuy.bijia',
  name: '慢慢买',
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
          matches: '[text^="关闭"][text.length=4]',
          snapshotUrls: 'https://i.gkd.li/import/13214974',
        },
      ],
    },
  ],
});
