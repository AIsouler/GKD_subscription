import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sqlitecd.meaning',
  name: '萤光阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="跳过广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13626762',
        },
      ],
    },
  ],
});
