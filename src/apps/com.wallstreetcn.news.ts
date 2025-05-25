import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wallstreetcn.news',
  name: '华尔街见闻',
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
            '@[vid="iv_jump_parent" || vid="iv_jump"] -2 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/94576b14-ad13-4fae-8d49-6b6d1b5096a7',
          snapshotUrls: [
            'https://i.gkd.li/i/14525329',
            'https://i.gkd.li/i/20430632',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.wallstreetcn.news.ProxyMainActivity',
          matches:
            '[text="广告" || text="活动"] + [id="com.wallstreetcn.news:id/close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13262717',
        },
      ],
    },
  ],
});
