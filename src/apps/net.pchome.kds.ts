import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.pchome.kds',
  name: 'kds宽带山',
  groups: [
    {
      key: 1,
      name: '应用内广告卡片',
      activityIds: 'net.pchome.kds.View.activity.TopicActivity2',
      rules: [
        {
          key: 0,
          matches: '@Image[text=""] < View +2 View > View > View > TextView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/13043221',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/13049609',
        },
      ],
    },
  ],
});
