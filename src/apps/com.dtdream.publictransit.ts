import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dtdream.publictransit',
  name: '杭州公共交通',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.dtchuxing.main.MainActivity',
      rules: '[id="com.dtdream.publictransit:id/ifv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12830113',
    },
  ],
});
