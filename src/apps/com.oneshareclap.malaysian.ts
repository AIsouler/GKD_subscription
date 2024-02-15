import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.oneshareclap.malaysian',
  name: '水果派',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="关闭广告"]',
      snapshotUrls: 'https://i.gkd.li/import/14275367',
    },
  ],
});
