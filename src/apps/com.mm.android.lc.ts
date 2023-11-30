import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mm.android.lc',
  name: '乐橙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.mm.android.lc:id/advert_skip_view"][text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12774801',
        },
        {
          quickFind: true,
          matches: '[id="com.mm.android.lc:id/advert_countdown_view"]',
          snapshotUrls: 'https://i.gkd.li/import/13454719',
        },
      ],
    },
  ],
});
