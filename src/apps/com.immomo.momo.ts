import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.immomo.momo',
  name: '陌陌',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length<10]',
          snapshotUrls: 'https://i.gkd.li/import/13329992',
        },
      ],
    },
  ],
});
