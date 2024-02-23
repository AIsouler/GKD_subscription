import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="用户已升级"] < * + [desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13218347',
    },
  ],
});
