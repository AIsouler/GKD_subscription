import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.svm.hbyy',
  name: '比翼多开',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      activityIds: 'com.svm.core.pro.view.activity.MainActivityEx',
      rules: [
        {
          matches: [
            '[text="打开或下载第三方应用"]',
            'FrameLayout[childCount=3] + FrameLayout > ImageView',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13185377',
        },
      ],
    },
  ],
});
