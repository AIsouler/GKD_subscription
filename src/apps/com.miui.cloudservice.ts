import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.cloudservice',
  name: '小米云服务',
  groups: [
    {
      key: 0,
      name: '相册-云存储空间不足',
      activityIds:
        'com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity',
      rules: 'View > [text="以后再说"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12847374',
    },
  ],
});
