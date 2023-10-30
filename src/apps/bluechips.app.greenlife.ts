import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'bluechips.app.greenlife',
  name: '绿地智生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="bluechips.app.greenlife:id/skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13206426',
    },
  ],
});
