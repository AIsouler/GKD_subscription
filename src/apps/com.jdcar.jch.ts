import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdcar.jch',
  name: '京东养车',
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
          fastQuery: true,
          matches:
            '@[vid^="tv_jump"][visibleToUser=true] - [vid="splash_ad_layout"]',
          exampleUrls: 'https://e.gkd.li/123daf14-31ac-4b5f-93cf-8b05efa26d03',
          snapshotUrls: 'https://i.gkd.li/i/18308609',
        },
      ],
    },
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
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches:
            '[id="com.jd.jdjch.lib.aurahome.feature:id/img_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/70efe1ea-0456-4438-b046-3494393191d7',
          snapshotUrls: 'https://i.gkd.li/i/18287988',
        },
      ],
    },
  ],
});
