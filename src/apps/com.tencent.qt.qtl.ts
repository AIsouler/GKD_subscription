import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12793273',
        'https://i.gkd.li/import/12893534',
        'https://i.gkd.li/import/13413724',
      ],
    },
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
