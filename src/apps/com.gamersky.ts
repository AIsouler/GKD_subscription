import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gamersky',
  name: '游民星空',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.gamersky.main.activity.LibMainActivity',
      rules: 'View[clickable= true] + TextView[text ^= "跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12848922',
    },
  ],
});
