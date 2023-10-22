import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.smarthome',
  name: '智慧生活',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
      rules: '@[text="以后再说"] +2 [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/12738253',
    },
  ],
});
