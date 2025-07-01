import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: 'bilibili',
  groups: [
    {
      key: 5,
      name: '评价提示-评论区满意度评价',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: 'com.bilibili.video.story.StoryVideoActivity',
      rules:
        '[text="对当前的评论区满意吗？"] + [id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://i.gkd.li/i/13115189',
    },
    {
      key: 6,
      name: '评价提示-APP评分',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches: ['[text="鼓励一下"]', '[text="下次再说"]'],
          snapshotUrls: 'https://i.gkd.li/i/13180746',
        },
      ],
    },
    {
      key: 7,
      name: '通知提示-订阅感兴趣的通知',
      desc: '点击"暂不开启"',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.bilibili.bplus.im.communication.HomeCommunicationActivity',
          matches: ['[text="订阅感兴趣的通知"]', '[text="暂不开启"]'],
          exampleUrls: 'https://e.gkd.li/283c2be2-80d7-43ab-976c-0896e678fc49',
          snapshotUrls: 'https://i.gkd.li/i/18392097',
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      desc: '自动点击"暂不"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches: ['[text="打开推送通知"]', '[text="暂不"]'],
          exampleUrls: 'https://e.gkd.li/e67d6d21-f09b-44b0-bf91-8b9fa0670e27',
          snapshotUrls: 'https://i.gkd.li/i/15907493',
        },
      ],
    },
  ],
});
