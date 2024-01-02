import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hlg.daydaytobusiness',
  name: '稿定设计',
  groups: [
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[text="现在升级"] - TextView[text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13766557',
    },
  ],
});
