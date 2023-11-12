import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cotticoffee.cotticlient',
  name: '库迪咖啡',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc$="跳过"][desc.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13261887',
        },
      ],
    },
  ],
});
