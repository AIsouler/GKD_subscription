import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tikbee.customer',
  name: '閃蜂',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.tikbee.customer:id/skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13350836',
    },
  ],
});
