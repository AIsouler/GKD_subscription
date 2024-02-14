import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cnki.client',
  name: '手机知网',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.cnki.client:id/update_undo"]',
      snapshotUrls: 'https://i.gkd.li/import/12854857',
    },
  ],
});
