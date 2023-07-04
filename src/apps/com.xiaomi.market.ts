import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.xiaomi.market',
  groups: [
    {
      key: 0,
      name: '小米应用商店-首页悬浮窗广告',
      activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
      rules: "Button[text='关闭']",
    },
  ],
};
