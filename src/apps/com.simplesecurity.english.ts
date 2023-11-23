import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.simplesecurity.english',
  name: '水果派',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      matchDelay: 3000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.simplesecurity.english:id/splash_ad_countdown"]',
      snapshotUrls: 'https://i.gkd.li/import/13447714', // matchDelay: 3000, 反馈3s后才能关闭
    },
  ],
});
