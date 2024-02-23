import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.modian.app',
  name: '摩点',
  groups: [
    {
      key: 1,
      name: '局部广告-"我的"界面广告条',
      activityIds: 'com.modian.app.ui.activity.MainActivity',
      rules: [
        {
          matches:
            '[id="com.modian.app:id/banner_view"] + [id="com.modian.app:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13610188',
        },
      ],
    },
  ],
});
