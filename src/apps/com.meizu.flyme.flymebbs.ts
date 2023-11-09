import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.meizu.flyme.flymebbs',
  name: '魅族社区',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[id="com.meizu.flyme.flymebbs:id/tv_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/import/13213487',
        },
      ],
    },
  ],
});
