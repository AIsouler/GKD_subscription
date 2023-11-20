import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.smk',
  name: '杭州市民卡',
  groups: [
    {
      key: 3,
      name: '广告弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.smk.activity.MainActivity',
      rules: '[id="com.smk:id/iv_close_ad"]',
      snapshotUrls: 'https://i.gkd.li/import/13402584',
    },
  ],
});
