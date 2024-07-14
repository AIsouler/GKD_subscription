import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jianshu.haruki',
  name: '简书',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗',
      fastQuery: true,
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
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: '[text="升级到最新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/15989275',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '局部广告-首页信息流广告',
      desc: '来自腾讯广告SDK',
      fastQuery: true,
      rules: [
        {
          matches: 'ImageView[vid="nativeAdClose"]',
          activityIds: 'com.baiji.jianshu.MainActivity',
          snapshotUrls: 'https://i.gkd.li/i/16201541',
        },
      ],
    },
  ],
});
