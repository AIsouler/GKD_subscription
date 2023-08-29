import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'air.tv.douyu.android',
  groups: [
    {
      key: 0,
      name: '斗鱼-开屏广告',
      activityIds: [
        'com.douyu.module.home.pages.main.MainActivity',
        `com.douyu.module.ad.launch.HotStartSplashActivity`,
      ],
      rules: [
        // https://gkd-kit.gitee.io/import/38517192/50c858ee-d331-4d5a-b5db-5eb17323c5ff
        `@TextView[text^='跳过'] + LinearLayout TextView[text*="跳转"]`,
        `[text^='跳过'] + * >2 TextView[text*='跳转']`, // 1686970245243, 1686970188866
      ],
    },
    {
      key: 1,
      name: `斗鱼-青少年模式`,
      desc: `关闭青少年模式提醒弹窗`,
      activityIds: [
        `com.douyu.module.young.view.YoungModeGuideDialog`,
        `com.douyu.module.home.pages.main.MainActivity`,
      ],
      rules: [
        // https://gkd-kit.gitee.io/import/38517192/1c081a65-688a-406b-b67b-9bfb9aba0fad
        `[text='开启青少年模式'] + [text='我知道了']`, // 1686970236642
      ],
    },
  ],
};
