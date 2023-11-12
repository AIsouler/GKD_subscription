import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pocket.snh48.activity',
  name: '口袋48',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.pocket.snh48.activity:id/skip_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13324405',
    },
  ],
});
