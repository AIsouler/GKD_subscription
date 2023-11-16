import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.reader',
  name: '阅读',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          exampleUrls:
            'https://m.gkd.li/6328439/ee16eabc-470a-45b5-8d5f-398af1cae47e',
          snapshotUrls: 'https://i.gkd.li/import/13375516',
        },
      ],
    },
  ],
});
