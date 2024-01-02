import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.rytong.hnair',
  name: '海南航空',
  groups: [
    {
      key: 1,
      name: '首页-弹窗广告',
      activityIds: 'com.hnair.airlines.ui.main.MainActivity',
      rules: 'ImageView[id*="com.rytong.hnair:id/iv_cloes"]',
      snapshotUrls: 'https://i.gkd.li/import/12846381',
    },
  ],
});
