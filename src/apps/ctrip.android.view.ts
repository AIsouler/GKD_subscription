import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'ctrip.android.publicproduct.home.view.CtripHomeActivity',
      rules: '[text*="用户已升级"] < * + [desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13218347',
    },
  ],
});
