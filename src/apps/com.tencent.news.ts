import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.news',
  name: '腾讯新闻',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '自动点击"更多"->"不感兴趣"',
      activityIds: 'com.tencent.news.activity.SplashActivity',
      rules: [
        {
          key: 0,
          name: '点击"更多"按钮',
          matches:
            'FrameLayout[id="android:id/content"][childCount=1] >n [text="广告"] +n [id="com.tencent.news:id/dislike_streamAd_more"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12755834',
            'https://i.gkd.li/i/12755852', // 使用 FrameLayout[id="android:id/content"][childCount=1] 进行限定，防止点击"更多"按钮后继续触发规则
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击"不感兴趣"按钮',
          matches:
            '[id="com.tencent.news:id/dislike_reason_view"] >n [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12755852',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-广告、活动弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.news.activity.SplashActivity',
          matches: '@[text="关闭"] + [text="查看活动详情"]',
          snapshotUrls: 'https://i.gkd.li/i/12755872',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.SplashActivity',
          matches: '[text="开启通知"] + [text="先不了"]',
          snapshotUrls: 'https://i.gkd.li/i/12755824',
        },
      ],
    },
  ],
});
