import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'mo.gov.dsat.bis',
  name: '巴士報站',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="mo.gov.dsat.bis:id/skipBtn"]',
      snapshotUrls: 'https://i.gkd.li/import/13350002',
    },
  ],
});
