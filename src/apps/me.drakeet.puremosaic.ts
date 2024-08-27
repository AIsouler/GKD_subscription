import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.drakeet.puremosaic',
  name: '纯纯打码',
  groups: [
    {
      key: 1,
      name: '全屏广告-解锁高级功能',
      desc: '点击“不”',
      activityIds: [],
      rules: [
        {
          matches: 'Button[text="不"&&parent.parent.parent.getChild(0).getChild(0).getChild(0).text="解锁高级功能"]',
          action: 'clickNode',
          snapshotUrls: 'https://i.gkd.li/i/16759977',
        },
      ],
    },
  ],
});
