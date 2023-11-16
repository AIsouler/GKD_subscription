import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.blackbees.xlife',
  name: 'Xlife',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13359460',
        },
      ],
    },
  ],
});
