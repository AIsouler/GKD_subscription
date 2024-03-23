import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'io.dcloud.H576E6CC7',
  name: '鱼泡网',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.yupao.entry.MainActivity',
          matches: '[vid="ad_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/42273686-b44a-4964-80a5-84b55e6ad75c',
          snapshotUrls: 'https://i.gkd.li/i/14731764',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.yupao.entry.MainActivity',
          matches: '[vid="close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/42273686-b44a-4964-80a5-84b55e6ad75c',
          snapshotUrls: 'https://i.gkd.li/i/14731764',
        },
      ],
    },
  ],
});
