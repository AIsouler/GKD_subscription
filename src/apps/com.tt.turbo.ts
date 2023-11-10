import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tt.turbo',
  name: '甜糖',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: 'View[desc^="跳过"][desc.length<=4]',
      snapshotUrls: 'https://i.gkd.li/import/13200355',
    },
  ],
});
