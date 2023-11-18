import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.xiaochuankeji.zuiyouLite',
  name: '皮皮搞笑',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.splash.SplashActivity',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12745084',
        },
        {
          key: 1,
          activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.splash.SplashActivity',
          matches:
            '[id="cn.xiaochuankeji.zuiyouLite:id/spalsh_ad_view"] >n [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12745095',
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.main.MainActivity',
      rules: '[id="cn.xiaochuankeji.zuiyouLite:id/young_close_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12745083',
    },
    {
      enable: false,
      key: 2,
      name: '信息流广告',
      quickFind: true,
      activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.slide.ActivitySlideDetail',
      rules: [
        {
          key: 0,
          name: '点击【x】',
          matches: '[id="cn.xiaochuankeji.zuiyouLite:id/ad_remove"]',
          snapshotUrls: 'https://i.gkd.li/import/13387116',
        },
        {
          preKeys: 0,
          name: '点击【不喜欢广告主】',
          matches: '@LinearLayout[clickable=true] > [text="不喜欢广告主"]',
          snapshotUrls: 'https://i.gkd.li/import/13387155',
        },
      ],
    },
  ],
});
