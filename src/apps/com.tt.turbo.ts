import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tt.turbo',
  name: '甜糖',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="取消"] + [desc="更新"]',
      snapshotUrls: 'https://i.gkd.li/import/14292907',
    },
  ],
});
