import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bwton.szfreego',
  name: '苏e行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.bwton.szfreego.business.LaunchActivity',
      rules: '[id="com.bwton.szfreego:id/tvSkip"]',
      snapshotUrls: 'https://i.gkd.li/import/12749225',
    },
  ],
});
