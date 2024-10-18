import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yunzhi.tiyu',
  name: '云运动',
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
            'https://m.gkd.li/57941037/6df5defd-2455-4c58-ad9a-a6ccab1c5e96',
          snapshotUrls: 'https://i.gkd.li/i/14429559',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.yunzhi.tiyu.module.MainActivity',
          matches:
            'WebView[text=""] >3 View > View > Image[text=""][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/fa043e1b-4dc6-4824-8b25-5f6c1cfdf0da',
          snapshotUrls: [
            'https://i.gkd.li/i/14428780',
            'https://i.gkd.li/i/14428777',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-首页卡片广告',
      desc: '点击关闭-点击[不感兴趣]',
      rules: [
        {
          key: 0,
          name: '点击关闭',
          activityIds: 'com.yunzhi.tiyu.module.MainActivity',
          matches: '@View[visibleToUser=true] +2 View >3 [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/369a65c8-4207-441b-a20d-2f5e402ea983',
          snapshotUrls: 'https://i.gkd.li/i/14446375',
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[不感兴趣]',
          fastQuery: true,
          activityIds: 'com.yunzhi.tiyu.module.MainActivity',
          matches: '@[clickable=true] > [text="不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1e5bff7e-b82b-458e-9179-364e6bf2c1da',
          snapshotUrls: 'https://i.gkd.li/i/14446216',
        },
      ],
    },
  ],
});
