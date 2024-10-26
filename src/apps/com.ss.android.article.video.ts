import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6f8312b0-e110-4098-9db9-48358069601a',
          snapshotUrls: 'https://i.gkd.li/i/17530523',
        },
      ],
    },
    {
      key: 0,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="青少年模式"] +n [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/12472628',
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="关闭"] - LinearLayout > [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/i/13328430',
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      rules:
        '@TextView[id="com.ss.android.article.video:id/sj"][text="暂不开启"]',
      snapshotUrls: 'https://i.gkd.li/i/13456568',
    },
    {
      key: 6,
      name: '全屏广告-红包弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ss.android.article.video.activity.SplashActivity',
      rules: '@FlattenUIImage[clickable=true] -2 [text="开心收下"]',
      snapshotUrls: 'https://i.gkd.li/i/13620299',
    },
  ],
});
