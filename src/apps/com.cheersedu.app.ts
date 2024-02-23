import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cheersedu.app',
  name: '湛庐阅读',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.cheersedu.app:id/iv_version_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13315712',
    },
  ],
});
