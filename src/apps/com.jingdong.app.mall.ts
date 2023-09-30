import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules:
        'RelativeLayout[desc="跳过"][id!=null] > TextView[text="跳过"][id!=null]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12668289',
        'https://gkd-kit.gitee.io/import/12519430',
      ],
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
        'FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc!="返回"][visibleToUser=true]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12642270',
        'https://gkd-kit.songe.li/import/12774910', // 使用 [desc!="返回"] 进行限定，防止在进入商品详情页时点击返回按钮
      ],
    },
  ],
});
