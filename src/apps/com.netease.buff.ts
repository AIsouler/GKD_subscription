import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.buff',
  name: 'BUFF',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text="暂不更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13310265',
    },
  ],
});
