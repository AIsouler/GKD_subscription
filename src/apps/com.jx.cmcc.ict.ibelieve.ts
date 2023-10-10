import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jx.cmcc.ict.ibelieve',
  name: '中国移动江西',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules:
        '[id = "com.jx.cmcc.ict.ibelieve:id/video_time_skip"][text *= "跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12852491',
    },
  ],
});
