import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.whale.whaleshop.ced',
  name: '追剧达人',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      desc: '点击[我知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[desc="我知道了"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c74158b2-c8d9-4ab2-aeb8-e87289fa49e0',
          snapshotUrls: 'https://i.gkd.li/i/17498241',
        },
      ],
    },
  ],
});
