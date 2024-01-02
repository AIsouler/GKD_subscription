import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      rules: '[id="com.tencent.qt.qtl:id/btn_update_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13611286',
    },
  ],
});
