import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.appbyme.app89001',
  name: '青白江论坛',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13759466',
    },
  ],
});
