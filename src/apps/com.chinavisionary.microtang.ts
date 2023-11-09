import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinavisionary.microtang',
  name: '微棠',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.chinavisionary.microtang.MainActivity',
      rules: [
        {
          matches: '[id="com.chinavisionary.microtang:id/tv_timer"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12841143',
        },
      ],
    },
  ],
});
