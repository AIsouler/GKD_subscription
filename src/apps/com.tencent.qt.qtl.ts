import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.tencent.qt.qtl:id/btn_update_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13611286',
    },
  ],
});
