import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ziroom.ziroomcustomer',
  name: '自如',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="tv_ok"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c6507af4-1bb2-4c39-ab5d-3d04ec391291',
          snapshotUrls: 'https://i.gkd.li/i/18373198',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-推荐好友弹窗',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="iv_nps_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/808f8c61-211f-4592-abe5-21467c133ba6',
          snapshotUrls: 'https://i.gkd.li/i/18373218',
        },
      ],
    },
  ],
});
