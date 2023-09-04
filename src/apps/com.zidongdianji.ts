import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zidongdianji',
  name: '自动点击器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.autoclicker.clicker.ads.SplashActivity',
      rules: [
        '[id=`com.byted.pangle:id/tt_splash_skip_btn`]',
        'TextView[text^=`跳过`]',
      ],
    },
    {
      key: 1,
      name: '首页顶部广告卡片',
      activityIds: 'com.autoclicker.clicker.MainActivity',
      rules: [
        {
          activityIds: 'com.bytedance.sdk.openadsdk.core.dislike.ui',
          matches:
            '@LinearLayout > TextView[id=`com.byted.pangle:id/tt_item_tv`][text=`不感兴趣`]',
        },
        'Image < @View + View >2 [text*=`广告`]',
      ],
    },
  ],
});
