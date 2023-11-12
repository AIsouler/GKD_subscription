import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kugou.android.lite',
  name: '酷狗概念版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13324363',
            'https://i.gkd.li/import/13318737',
          ],
        },
        {
          key: 1,
          matches: '[desc*="跳过" && desc.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/12919282',
        },
      ],
    },
  ],
});
