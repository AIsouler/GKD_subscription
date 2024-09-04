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
      name: '全屏广告-活动通知',
      fastQuery: true,
      rules: [
        {
          key: 1,
          matches: '[id="com.nn.accelerator.box:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16869245',
        },
      ],
    },
  ],
});
