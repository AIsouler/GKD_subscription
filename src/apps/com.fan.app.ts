import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fan.app',
  name: '十六番旅行',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: 'com.mvvm.view.LazyMapStrategyActivity_TengXun',
      rules: [
        {
          key: 0,
          matches:
            '@View[clickable=true][childCount=0] < FrameLayout[desc^="dislike"] + FrameLayout >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13258021',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13258015',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击[以后再说]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.mvc.activity.HomepageActivity2',
          matches: '[id="com.fan.app:id/tv_nj_later"]',
          snapshotUrls: 'https://i.gkd.li/i/13601734',
        },
      ],
    },
  ],
});
