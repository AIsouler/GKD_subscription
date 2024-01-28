import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '@View[clickable=true] <n * <2 * < [vid="flCSJAdContainer"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13988957',
            'https://i.gkd.li/import/13989178',
          ],
        },
      ],
    },
  ],
});
