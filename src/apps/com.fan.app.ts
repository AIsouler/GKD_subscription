import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fan.app',
  name: '十六番旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/470c6262-62ca-45c5-908c-8435d7b0e86f',
          snapshotUrls: [
            'https://i.gkd.li/i/14596657',
            'https://i.gkd.li/i/13258011',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
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
      name: '权限提示-通知权限',
      desc: '自动点击“以后再说”',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.fan.app:id/tv_nj_later"]',
      snapshotUrls: 'https://i.gkd.li/i/13601734',
    },
  ],
});
