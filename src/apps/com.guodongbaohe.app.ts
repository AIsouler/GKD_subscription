import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.guodongbaohe.app',
  name: '果冻宝盒',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: '[text*="跳过"][id="com.guodongbaohe.app:id/time"]',
      snapshotUrls: 'https://i.gkd.li/import/13543323',
    },
  ],
});
