import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhiwei.rjm',
  name: 'RJmao',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.zhiwei.rjm.MainActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] < * +2 ViewGroup > [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a68b2a70-9bd3-4ba4-9802-f0b60052d4c2',
          snapshotUrls: 'https://i.gkd.li/i/14430564',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '视频播放页卡片广告',
          fastQuery: true,
          activityIds: 'com.zhiwei.rjm.MainActivity',
          matches:
            '@TextView[clickable=true] <2 View + View > [visibleToUser=true][text="广告"] <<n [vid="ksad_container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7bfe06a0-d91a-40cf-879e-1c03beac7a35',
          snapshotUrls: 'https://i.gkd.li/i/14430539',
        },
      ],
    },
  ],
});
