import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fan.app',
  name: '十六番旅行',
  groups: [
    {
      key: 1,
      name: '局部广告-广告卡片',
      activityIds: 'com.mvvm.view.LazyMapStrategyActivity_TengXun',
      rules: [
        {
          key: 0,
          matches: '[desc^="dislike"] > View',
          snapshotUrls: 'https://i.gkd.li/i/13258021',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13258015',
        },
        {
          key: 2,
          matches: '@Image < View -2 View >2 View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13258018',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-请求通知弹窗',
      desc: '自动点击“以后再说”',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.fan.app:id/tv_nj_later"]',
      snapshotUrls: 'https://i.gkd.li/i/13601734',
    },
  ],
});
