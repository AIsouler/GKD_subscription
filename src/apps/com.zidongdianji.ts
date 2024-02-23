import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zidongdianji',
  name: '自动点击器',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.bytedance.sdk.openadsdk.core.dislike.ui',
          matches:
            '@LinearLayout > TextView[id=`com.byted.pangle:id/tt_item_tv`][text=`不感兴趣`]',
        },
        {
          key: 1,
          activityIds: 'com.autoclicker.clicker.MainActivity',
          matches: 'Image < @View + View > View > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13761239',
        },
      ],
    },
  ],
});
