import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.coolapk.market',
  groups: [
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
          matches:
            '@LinearLayout > TextView[id=`com.byted.pangle:id/tt_item_tv`][text=`不感兴趣`]',
        },
        `Button[text$="免广告"] + Button[text="不感兴趣"]`, // 1692148279610
        'Button[text$=`去广告`] - Button[text=`不感兴趣`]',
        '[id=`com.coolapk.market:id/close_view`]',
      ],
    },
  ],
};
