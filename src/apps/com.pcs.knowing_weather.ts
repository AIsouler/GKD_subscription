import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pcs.knowing_weather',
  name: '知天气-决策',
  groups: [
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      matchLauncher: true,
      rules: '[text="立即升级"] +2 [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13378992', // activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
    },
  ],
});
