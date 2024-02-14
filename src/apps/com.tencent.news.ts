import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.news',
  name: '腾讯新闻',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '自动点击"更多"->"不感兴趣"',
      activityIds: [
        'com.tencent.news.activity.SplashActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          key: 0,
          name: '点击"更多"按钮',
          matches:
            'FrameLayout[id="android:id/content"][childCount=1] >n [text="广告"] +n [id="com.tencent.news:id/dislike_streamAd_more"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12755834',
            'https://i.gkd.li/import/12755852', // 使用 FrameLayout[id="android:id/content"][childCount=1] 进行限定，防止点击"更多"按钮后继续触发规则
            'https://i.gkd.li/import/12755914', // activityId: 'com.miui.home.launcher.Launcher'
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击"不感兴趣"按钮',
          matches:
            '[id="com.tencent.news:id/dislike_reason_view"] >n [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12755852',
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
          snapshotUrls: 'https://i.gkd.li/import/12755872',
        },
        // 在这个规则组中继续添加广告、活动弹窗
      ],
    },
    {
      enable: false,
      key: 10,
      name: '通知提示-请求通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="开启通知"] + [text="先不了"]',
      snapshotUrls: 'https://i.gkd.li/import/12755824',
    },
  ],
});
