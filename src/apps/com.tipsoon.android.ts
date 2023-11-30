import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tipsoon.android',
  name: '简讯',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13498741',
    },
    {
      key: 0,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '弹窗广告-1',
          activityIds: 'com.tipsoon.android.activity.MainActivity',
          matches:
            '[id="com.tipsoon.android:id/cardview"] + [id="com.tipsoon.android:id/img_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13426997',
        },
      ],
    },
  ],
});
