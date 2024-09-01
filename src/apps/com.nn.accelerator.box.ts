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
      rules: [
        {
          matches: '[vid="tobid_splash_skip_ll"]',
          exampleUrls: 'https://e.gkd.li/03b70de9-9e1d-4362-83df-08a95c2c224f',
          snapshotUrls: 'https://i.gkd.li/i/16451775',
        },
        {
          quickFind: true,
          activityIds: 'com.nn.accelerator.box.activity.WelcomeActivity',
          matches:
            'ImageView[desc="skip_button"] + ViewGroup > TextView[text="跳过"]', // 左上角圆形跳过
          snapshotUrls: 'https://i.gkd.li/i/16828285',
        },
      ],
    },
  ],
});
