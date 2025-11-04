import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdd.newjdd.app',
  name: '匠多多师傅版',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      // matchTime: 10000, // 可能出现多次 https://github.com/AIsouler/GKD_subscription/issues/1376
      // actionMaximum: 1,
      // resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="jump"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/10dd2d8b-e48a-4554-a748-c9e156b003d9',
          snapshotUrls: 'https://i.gkd.li/i/23294048',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/557eefdd-fd75-4a93-8f68-6ae8f042270a',
          snapshotUrls: 'https://i.gkd.li/i/23294049',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示-公告弹窗',
      desc: '点击[查看详情]-返回关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="系统公告"][visibleToUser=true]',
            '[text="点击查看详情"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/146c27dc-9e92-4074-930f-d099c65c44f2',
          snapshotUrls: 'https://i.gkd.li/i/23295736',
        },
        {
          preKeys: [0],
          matches:
            '@View[clickable=true] >2 [childCount=0][text=""][visibleToUser=true] <<n [vid="webviewschool"]',
          exampleUrls: 'https://e.gkd.li/dff1e373-76eb-43d7-9bec-229eebae511d',
          snapshotUrls: 'https://i.gkd.li/i/23295738',
        },
      ],
    },
  ],
});
