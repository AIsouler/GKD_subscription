import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jianshu.haruki',
  name: '简书',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baiji.jianshu.ui.splash.SplashScreenActivity',
          matches: '[id="com.jianshu.haruki:id/dialog_lucky_prize_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13327286',
        },
      ],
    },
  ],
});
