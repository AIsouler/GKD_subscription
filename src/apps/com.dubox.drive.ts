import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dubox.drive',
  name: 'TeraBox',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[id="com.dubox.drive:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13200574',
    },
    {
      key: 1,
      name: '广告弹窗',
      quickFind: true,
      activityIds: 'com.dubox.drive.ui.MainActivity',
      rules: 'ImageView[id="com.dubox.drive:id/ivClose"]',
      snapshotUrls: 'https://i.gkd.li/import/13200577',
    },
  ],
});
