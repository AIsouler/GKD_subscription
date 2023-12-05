import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.dingblock.mobile',
  name: '盯链',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="跳过"][id="net.dingblock.mobile:id/boot_time_txt"]',
      snapshotUrls: 'https://i.gkd.li/import/13554178',
    },
  ],
});
