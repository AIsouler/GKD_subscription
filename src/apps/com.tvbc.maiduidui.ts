import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tvbc.maiduidui',
  name: '埋堆堆',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      activityIds: 'com.tvbc.maiduidui.MainHomeActivity',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '@[vid="tv_ok"] - [vid="tv_open_child_model"]',
      snapshotUrls: 'https://i.gkd.li/import/13847804',
    },
  ],
});
