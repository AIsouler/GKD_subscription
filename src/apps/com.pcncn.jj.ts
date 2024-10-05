import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pcncn.jj',
  name: '作业精灵',
  groups: [
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.pcncn.jj.act.AnswerDetail2Activity',
          matches: '[id="com.pcncn.jj:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13695874',
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.act.HomeNewActivity',
          matches: '[vid="ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b83aa566-8105-4877-abcd-800abfe7634e',
          snapshotUrls: 'https://i.gkd.li/i/17265140',
        },
      ],
    },
  ],
});
