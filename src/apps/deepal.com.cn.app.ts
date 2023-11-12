import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'deepal.com.cn.app',
  name: '深蓝汽车',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="deepal.com.cn.app:id/tvOnSkipBtn"]',
      snapshotUrls: 'https://i.gkd.li/import/13314669',
    },
  ],
});
