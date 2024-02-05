import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tipsoon.android',
  name: '简讯',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
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
