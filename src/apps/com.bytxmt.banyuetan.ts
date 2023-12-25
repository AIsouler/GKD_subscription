import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bytxmt.banyuetan',
  name: '半月谈',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.bytxmt.banyuetan.activity.LauncherActivity',

      rules: '[id="com.bytxmt.banyuetan:id/activity_launcher_ad_time_bt"]',
      snapshotUrls: 'https://i.gkd.li/import/13166668',
    },
  ],
});
