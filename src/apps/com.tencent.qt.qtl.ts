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
  ],
});
