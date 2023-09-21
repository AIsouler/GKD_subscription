import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.mobimail',
  name: '网易邮箱',
  groups: [
    {
      // 网易邮箱还有另一种开屏广告，想截快照的时候刷不出来，感觉是隔比较久的时间再打开才有概率出现，之后再刷
      key: 0,
      name: '开屏广告',
      activityIds: 'com.netease.mail.ad.launch.ui.SplashAdActivity',
      rules: '[id="com.netease.mobimail:id/ad_skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12667519',
    },
    {
      key: 1,
      name: '广告卡片',
      rules: [
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches: '[id="com.netease.mobimail:id/ad_vip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12683488',
        },
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches: '[id="com.netease.mobimail:id/ll_delete"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12683511',
        },
      ],
    },
  ],
});
