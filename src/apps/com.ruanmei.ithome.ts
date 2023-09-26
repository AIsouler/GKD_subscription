import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ruanmei.ithome',
  name: 'IT之家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.ruanmei.ithome.ui.MainActivity',
      rules: '[id="com.ruanmei.ithome:id/fl_skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12720744',
    },
  ],
});
