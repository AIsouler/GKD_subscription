import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'org.daai.netcheck',
  name: '网络万用表',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'org.daai.netcheck.MainActivity',
      rules: '[id="org.daai.netcheck:id/skip_view"]',
      snapshotUrls: 'https://i.gkd.li/import/import/13174128',
    },
  ],
});
