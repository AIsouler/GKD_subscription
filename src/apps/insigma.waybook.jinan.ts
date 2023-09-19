import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'insigma.waybook.jinan',
  name: '369出行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: '[id="insigma.waybook.jinan:id/qm_time"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12660773',
    },
  ],
});
