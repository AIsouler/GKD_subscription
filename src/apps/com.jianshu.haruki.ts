import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jianshu.haruki',
  name: '简书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '【跳过+倒计时】型',
          quickFind: true,
          matches: '[text *= "跳过"][text.length <= 10]',
          snapshotUrls: 'https://i.gkd.li/import/13327285',
        },
        {
          key: 1,
          name: '【圆圈跳过】型',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13327288',
        },
      ],
    },
    {
      key: 1,
      name: 'VIP弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baiji.jianshu.ui.splash.SplashScreenActivity',
          matches: '[id="com.jianshu.haruki:id/dialog_lucky_prize_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13327286',
        },
      ],
    },
  ],
});
