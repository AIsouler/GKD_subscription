import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fan.app',
  name: '十六番旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13258011',
        },
        {
          key: 1,
          matches: '@Image < View - View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13258016',
        },
      ],
    },
    {
      key: 1,
      name: '广告卡片',
      activityIds: 'com.mvvm.view.LazyMapStrategyActivity_TengXun',
      rules: [
        {
          key: 0,
          matches: '[desc^="dislike"] > View',
          snapshotUrls: 'https://i.gkd.li/import/13258021',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13258015',
        },
        {
          key: 2,
          matches: '@Image < View -2 View >2 View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13258018',
        },
      ],
    },
  ],
});
