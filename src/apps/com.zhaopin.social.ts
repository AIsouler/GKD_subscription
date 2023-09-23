import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhaopin.social',
  name: '智联招聘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.zhaopin.social.SplashActivity',
      rules:
        '[id="com.zhaopin.social:id/tv_ad"] + [id="com.zhaopin.social:id/cdp_view"][text^="跳过"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12706183'],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.zhaopin.social.my.setting.AboutUsActivity',
      rules:
        '[id="com.zhaopin.social:id/update"] + [id="com.zhaopin.social:id/ignore"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12706186'],
    },
    {
      key: 2,
      name: '我的页面-banner广告',
      activityIds: 'com.zhaopin.social.homepage.ZSC_MainTabActivity',
      rules: '[id="com.zhaopin.social:id/rl_banner_close"][clickable=true]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12706181'],
    },
  ],
});
