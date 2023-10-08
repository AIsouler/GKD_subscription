import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ky.medical.reference',
  name: '用药参考',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      activityIds: 'com.ky.medical.reference.promotion.AdDialogActivity',
      rules: [
        {
          matches: '[id="com.ky.medical.reference:id/icClose"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12840924',
        },
      ],
    },
  ],
});
