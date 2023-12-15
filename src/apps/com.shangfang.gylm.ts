import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shangfang.gylm',
  name: '高佣联盟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[clickable=true] > [text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13643613',
    },
    {
      key: 2,
      name: '版本更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.shangfang.gylm:id/iv_upgrade_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13643599',
    },
  ],
});
