import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.coolapk.market',
  groups: [
    {
      key: -1,
      name: `酷安-开屏广告`,
      activityIds: [
        `com.coolapk.market.view.splash.SplashActivity`,
        `com.coolapk.market.view.main.MainActivity`,
      ],
      rules: [`[id="com.byted.pangle.m:id/tt_splash_skip_btn"]`],
      // https://gkd-kit.gitee.io/import/38517192/4ba30986-55d4-4a94-b7e2-6cf7d9c6d66d
      // https://gkd-kit.gitee.io/import/38517192/47919419-30c7-41ee-b31e-01afaa98f108
    },
    {
      key: 0,
      name: '酷安-关闭卡片广告',
      desc: '点击卡片右上角按钮,然后点击关闭弹窗',
      activityIds: [
        'com.coolapk.market.view.main.MainActivity',
        'com.coolapk.market.view.base.SimpleAlphaActivity',
      ],
      rules: [
        {
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.dislike.ui',
            'com.coolapk.market.view.main.MainActivity',
            'com.coolapk.market.view.base.SimpleAlphaActivity',
          ],
          // https://gkd-kit.gitee.io/import/38517192/9badc07c-4da2-4066-8af5-d96a86a28315
          matches: '@LinearLayout > TextView[id!=null][text=`不感兴趣`]',
        },
        `Button[text$="免广告"] + Button[text="不感兴趣"]`, // 1692148279610
        'Button[text$=`去广告`] - Button[text=`不感兴趣`]',
        '[id=`com.coolapk.market:id/close_view`]',
      ],
    },
  ],
};
