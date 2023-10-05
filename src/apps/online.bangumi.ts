import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'online.bangumi',
  name: 'アニメ新番組',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'online.bangumi.MainActivity',
      rules: 'TextView[text^="跳過"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12799678',
    },
  ],
});
