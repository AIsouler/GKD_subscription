import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fenbi.android.leo',
  name: '小猿口算',
  groups: [
    {
      enable: false,
      key: 1,
      name: '评价提示',
      quickFind: true,
      actionMaximum: 1,
      activityIds:
        'com.fenbi.android.leo.imgsearch.sdk.activity.NewCheckCameraActivity',
      rules: '@[text="残忍拒绝"] + [text*="好评"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13226140',
    },
  ],
});
