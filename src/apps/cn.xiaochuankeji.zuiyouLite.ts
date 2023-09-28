import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.xiaochuankeji.zuiyouLite',
  name: '皮皮搞笑',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: [
        {
          key: 0,
          activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.splash.SplashActivity',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12745084',
        },
        {
          key: 1,
          activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.splash.SplashActivity',
          matches:
            '[id="cn.xiaochuankeji.zuiyouLite:id/spalsh_ad_view"] >n [text="跳过"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12745095',
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.main.MainActivity',
      rules: '[id="cn.xiaochuankeji.zuiyouLite:id/young_close_btn"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12745083',
    },
  ],
});
