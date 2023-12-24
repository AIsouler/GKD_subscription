import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.searchbox.lite',
  name: '百度极速版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13741508',
        },
      ],
    },
  ],
});
