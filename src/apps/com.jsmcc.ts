import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jsmcc',
  name: '中国移动江苏',
  groups: [
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.jsmcc:id/cancelVersionTV"]',
          snapshotUrls: 'https://i.gkd.li/import/13327322',
        },
      ],
    },
  ],
});
