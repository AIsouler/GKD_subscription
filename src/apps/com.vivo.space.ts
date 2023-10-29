import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vivo.space',
  name: 'vivo 官网',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.vivo.space:id/timer"]',
      snapshotUrls: ['https://i.gkd.li/import/13197585'],
    },
  ],
});
