import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nn.accelerator.box',
  name: '雷神加速器',
  groups: [
    {
      key: 0, // 全局规则概率误触 https://github.com/AIsouler/GKD_subscription/issues/285
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[vid="tobid_splash_skip_ll" || vid="ms_skipView"]',
          exampleUrls: 'https://e.gkd.li/03b70de9-9e1d-4362-83df-08a95c2c224f',
          snapshotUrls: [
            'https://i.gkd.li/i/16451775',
            'https://i.gkd.li/i/18668837',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            'ImageView[desc="skip_button"] + ViewGroup > TextView[text="跳过"]',
          exampleUrls: 'https://e.gkd.li/625debfb-faa5-438a-a5ba-5175233ea1d2',
          snapshotUrls: 'https://i.gkd.li/i/16828285',
        },
        {
          key: 2,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
          exampleUrls: 'https://e.gkd.li/d5777afa-927b-4d6d-be67-e92fd2f206cd',
          snapshotUrls: 'https://i.gkd.li/i/18668718',
        },
        {
          key: 3,
          fastQuery: true,
          matches: '@View[clickable=true] - [text="互动广告"]',
          exampleUrls: 'https://e.gkd.li/d32ca677-f0c4-49e4-8dfe-f105a9ab1cb9',
          snapshotUrls: 'https://i.gkd.li/i/18668852',
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
