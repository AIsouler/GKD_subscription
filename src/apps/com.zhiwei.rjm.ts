import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhiwei.rjm',
  name: 'RJmao',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
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
          activityIds: 'com.zhiwei.rjm.MainActivity',
          matches: '@TextView[clickable=true] <2 View + View > [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7bfe06a0-d91a-40cf-879e-1c03beac7a35',
          snapshotUrls: 'https://i.gkd.li/i/14430539',
        },
      ],
    },
  ],
});
