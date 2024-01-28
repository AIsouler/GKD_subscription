import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zlfcapp.batterymanager',
  name: '电池容量检测管理',
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
          matches: '@View[clickable=true] <<n [vid="splash_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13960341',
        },
      ],
    },
  ],
});
