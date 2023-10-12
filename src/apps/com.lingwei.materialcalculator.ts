import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lingwei.materialcalculator',
  name: '算料宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qidongtech.AppStart',
      rules: 'TextView[text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12884149',
    },
  ],
});
