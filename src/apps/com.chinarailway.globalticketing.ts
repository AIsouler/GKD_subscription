import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinarailway.globalticketing',
  name: 'Railway 12306',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.chinarailway.globalticketing:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13433243',
    },
  ],
});
