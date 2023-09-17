import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: '[desc$="广告"] +2 [desc="跳过"] > [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12519430',
    },
    {
      enable: false,
      key: 1,
      name: '购物车界面-砸金蛋',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642266',
    },
    {
      enable: false,
      key: 2,
      name: '我的界面-参与调研',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules:
        'RelativeLayout > ImageView[text=null][id^="com.jd.lib.personal.feature:id"] + ImageView[text=null][id^="com.jd.lib.personal.feature:id"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642270',
    },
  ],
});
