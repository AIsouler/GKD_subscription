import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hsbank.mobilebank',
  name: '徽商银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.hsbank.mobilebank:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13625382',
    },
  ],
});
