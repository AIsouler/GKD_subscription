import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fenbi.android.leo',
  name: '小猿口算',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/import/13226136',
    },
    {
      enable: false,
      key: 1,
      name: '评分弹窗',
      quickFind: true,
      actionMaximum: 1,
      activityIds:
        'com.fenbi.android.leo.imgsearch.sdk.activity.NewCheckCameraActivity',
      rules: '@[text="残忍拒绝"] + [text*="好评"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/import/13226140',
    },
  ],
});
