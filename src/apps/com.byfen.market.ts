import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.byfen.market',
  name: '百分网游戏盒子',
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
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13298944',
            'https://i.gkd.li/i/13800021',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.byfen.market.ui.activity.MainActivity',
          matches: '[vid="idIvClose"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/35d2a562-fe30-4bff-b739-96b37dccd05c',
          snapshotUrls: 'https://i.gkd.li/i/13801613',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击[忽略更新]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[text="忽略更新"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e92b10b8-b0f8-4dc3-95bf-172829996600',
          snapshotUrls: 'https://i.gkd.li/i/14322280',
        },
      ],
    },
  ],
});
