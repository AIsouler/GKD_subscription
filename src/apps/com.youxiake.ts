import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youxiake',
  name: '游侠客旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.youxiake.ui.main.MainActivity',

      quickFind: true,
      rules: [
        {
          matches: '[id="com.youxiake:id/start_skip_txt"]',
          snapshotUrls: 'https://i.gkd.li/import/12891979',
        },
      ],
    },
  ],
});
