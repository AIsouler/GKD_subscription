import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.mobimail',
  name: '网易邮箱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.netease.mail.ad.launch.ui.SplashAdActivity',
      rules: [
        {
          matches: '[id="com.netease.mobimail:id/ad_skip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12667519',
        },
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12686093',
        },
        {
          matches:
            '[id="com.netease.mobimail:id/ad_placeholder"] >5 TextView[text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12686132',
        },
      ],
    },
    {
      key: 1,
      name: '邮件列表页面广告条目',
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
    {
      key: 2,
      name: '切回时的开屏广告',
      activityIds: 'com.netease.mail.biz.main.MainITabActivity',
      rules: '@LinearLayout > TextView[text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12685745',
    },
  ],
});
