import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.modian.app',
  name: '摩点',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          matches: '[id="com.modian.app:id/tv_skip"][text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13610185',
        },
      ],
    },
    {
      key: 1,
      name: '「我的」界面广告条',
      activityIds: 'com.modian.app.ui.activity.MainActivity',
      rules: [
        {
          matches:
            '[id="com.modian.app:id/banner_view"] + [id="com.modian.app:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13610188',
        },
      ],
    },
  ],
});
