import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.SplashActivity',
          matches: '@[desc="关闭"] - LinearLayout > [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13328430',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.SplashActivity',
          matches: ['[text="开启推送通知"]', '[text="暂不开启"]'],
          snapshotUrls: 'https://i.gkd.li/i/13456568',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-红包弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ss.android.article.video.activity.SplashActivity',
          matches: '@FlattenUIImage[clickable=true] -2 [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/i/13620299',
        },
      ],
    },
  ],
});
