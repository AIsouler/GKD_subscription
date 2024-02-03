import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bilibili.app.in',
  name: 'bilibili',
  groups: [
    {
      key: 5,
      name: '评价提示-评论区满意度评价',
      quickFind: true,
      activityIds: 'com.bilibili.video.story.StoryVideoActivity',
      rules:
        '[text="对当前的评论区满意吗？"] + [id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13115189',
    },
    {
      key: 6,
      name: '评价提示-APP评分',
      quickFind: true,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: '[id="com.bilibili.app.in:id/cancel"][text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13180746',
    },
    {
      key: 7,
      name: '通知提示-订阅感兴趣的通知',
      desc: '点击【暂不开启】',
      quickFind: true,

      rules: '[text="订阅感兴趣的通知"] +2 LinearLayout [text="暂不开启"]',
      snapshotUrls: 'https://i.gkd.li/import/13399195',
    },
    {
      key: 8,
      name: '通知提示-推送通知弹窗',
      desc: '自动点击"暂不"',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules:
        '[text="打开推送通知"] +2 LinearLayout > [id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13600976',
    },
  ],
});
