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
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/13298944',
            'https://i.gkd.li/i/13800021',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/350a83a9-8330-4e7c-b1b7-bb0881b7ac6c',
          snapshotUrls: 'https://i.gkd.li/i/17860124',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
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
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.activity.MainActivity',
          matches: '[text="忽略更新"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e92b10b8-b0f8-4dc3-95bf-172829996600',
          snapshotUrls: 'https://i.gkd.li/i/14322280',
        },
      ],
    },
  ],
});
