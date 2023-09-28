import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mobi.shtp',
  name: '上海交警',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mobi.shtp.activity.login.AdvActivity',
      rules:
        '[id="com.mobi.shtp:id/ll_adv_img"] + [id="com.mobi.shtp:id/tv_count"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740073',
    },
  ],
});
