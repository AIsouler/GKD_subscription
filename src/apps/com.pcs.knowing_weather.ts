import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pcs.knowing_weather',
  name: '知天气-决策',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="立即升级"] +2 [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/13378992', // activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
    },
  ],
});
