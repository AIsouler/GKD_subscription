import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.nionco.todaysm',
  name: '今日水木',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc*="跳过"][desc.length<=5]',
      snapshotUrls: 'https://i.gkd.li/import/13587459',
    },
  ],
});
