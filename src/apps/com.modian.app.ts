import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.modian.app',
  name: '摩点',
  groups: [
    {
      key: 1,
      name: '局部广告-[我的]界面广告条',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.modian.app.ui.activity.MainActivity',
          matches:
            '[id="com.modian.app:id/fl_banner_layout"] > [id="com.modian.app:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13610188',
        },
      ],
    },
  ],
});
