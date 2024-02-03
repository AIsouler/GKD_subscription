import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.cloudservice',
  name: '小米云服务',
  groups: [
    {
      key: 0,
      name: '全屏广告-云存储空间不足弹窗',
      activityIds:
        'com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity',
      rules: 'View > [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/12847374',
    },
  ],
});
