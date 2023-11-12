import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cheersedu.app',
  name: '湛庐阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.cheersedu.app:id/tv_start_count_down_text"]',
      snapshotUrls: 'https://i.gkd.li/import/13315696',
    },
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.cheersedu.app.main.MainActivity',
      rules: '[id="com.cheersedu.app:id/iv_version_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13315712',
    },
  ],
});
