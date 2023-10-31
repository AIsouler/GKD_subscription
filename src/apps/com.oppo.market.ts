import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.oppo.market',
  name: '一加软件商店',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13211017',
        },
      ],
    },
  ],
});
