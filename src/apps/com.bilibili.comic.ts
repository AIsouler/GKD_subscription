import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bilibili.comic',
  name: '哔哩哔哩漫画',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      matchTime: 15000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.bilibili.comic:id/tv_know"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063676',
        'https://i.gkd.li/import/13262801',
      ],
    },
  ],
});
