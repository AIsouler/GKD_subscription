import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gamersky',
  name: '游民星空',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.gamersky.main.activity.LibMainActivity',
      rules: [
        {
          matches: 'View[clickable= true] + TextView[text ^= "跳过"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12848922',
        },
        {
          matches: '[id="com.gamersky:id/jump"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13038181',
        },
      ],
    },
  ],
});
