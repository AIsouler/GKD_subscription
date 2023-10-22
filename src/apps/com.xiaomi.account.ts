import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.account',
  name: '小米账号',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.xiaomi.account.upgrade.AccountApkUpdateDialogActivity',
      rules: '@[text="以后再说"] + [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/12781280',
    },
  ],
});
