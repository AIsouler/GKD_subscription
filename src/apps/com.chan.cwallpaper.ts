import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chan.cwallpaper',
  name: '图凌',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[vid="activate_button"]',
      snapshotUrls: 'https://i.gkd.li/import/14293734',
    },
  ],
});
