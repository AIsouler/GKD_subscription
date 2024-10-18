import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nn.accelerator.box',
  name: '雷神加速器',
  groups: [
    {
      key: 0, // 全局规则概率误触 https://github.com/AIsouler/GKD_subscription/issues/285
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="tobid_splash_skip_ll"]',
          exampleUrls: 'https://e.gkd.li/03b70de9-9e1d-4362-83df-08a95c2c224f',
          snapshotUrls: 'https://i.gkd.li/i/16451775',
        },
        {
          key: 1,
          matches:
            'ImageView[desc="skip_button"] + ViewGroup > TextView[text="跳过"]',
          exampleUrls: 'https://e.gkd.li/625debfb-faa5-438a-a5ba-5175233ea1d2',
          snapshotUrls: 'https://i.gkd.li/i/16828285',
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
          activityIds: '.activity.MainActivity',
          matches: '[vid="iv_activity"] + [vid="iv_close"]',
          exampleUrls: 'https://e.gkd.li/a65304c0-0abe-4fc6-8eda-03f8d51ad62d',
          snapshotUrls: 'https://i.gkd.li/i/16869245',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: ['[text*="打开通知"]', '[vid="iv_close"]'],
          exampleUrls: 'https://e.gkd.li/18e591d7-56cf-490d-bca8-d6eda269525d',
          snapshotUrls: 'https://i.gkd.li/i/16870058',
        },
      ],
    },
  ],
});
