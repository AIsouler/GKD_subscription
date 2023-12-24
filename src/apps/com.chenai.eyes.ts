import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chenai.eyes',
  name: '夜间模式',
  groups: [
    {
      key: 6,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '腾讯广告SDK',
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13698395',
        },
      ],
    },
  ],
});
