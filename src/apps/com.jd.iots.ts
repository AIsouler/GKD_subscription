import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.iots',
  name: '京东小家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jd.smart.activity.LoadingActivity',

      quickFind: true,
      rules: '[id="com.jd.iots:id/skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12901733',
    },
  ],
});
