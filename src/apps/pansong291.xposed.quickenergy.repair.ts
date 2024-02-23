import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'pansong291.xposed.quickenergy.repair',
  name: '芝麻粒',
  groups: [
    {
      name: '未分类-开屏弹窗跳过',
      key: 1,
      desc: '打开app点击知道了',
      rules: [
        {
          activityIds: ['pansong291.xposed.quickenergy.ui.MainActivity'],
          matches: ['[id="android:id/button2"]'],
          snapshotUrls: ['https://i.gkd.li/i/13445477'],
        },
      ],
    },
  ],
});
