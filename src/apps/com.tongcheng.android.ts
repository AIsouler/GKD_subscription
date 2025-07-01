import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tongcheng.android',
  name: '同程旅行',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.TongchengMainActivity',
          matches: '[vid="iv_home_ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/25369e74-1527-4ca5-9f39-77930ee84d1e',
          snapshotUrls: 'https://i.gkd.li/i/20921290',
        },
      ],
    },
    {
      key: 3,
      name: '评价提示',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.TongchengMainActivity',
          matches: [
            '[text="给个好评鼓励下吧"][visibleToUser=true]',
            '[vid="iv_close"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/60949e51-3d07-4eda-ab2d-9ff561d8b58c',
          snapshotUrls: 'https://i.gkd.li/i/20921292',
        },
      ],
    },
  ],
});
