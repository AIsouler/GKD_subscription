import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pandabus.android.zb',
  name: '淄博出行',
  groups: [
    {
      key: 3,
      name: '广告弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.pandabus.android.zb:id/iv_native_dislike"]',
      snapshotUrls: 'https://i.gkd.li/import/13400177',
    },
  ],
});
