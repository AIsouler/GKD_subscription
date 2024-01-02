import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jsguohua.youquanmall.tt',
  name: '图图影视',
  groups: [
    {
      key: 1,
      name: '应用内弹窗',
      activityIds: 'com.zero.flutter_qq_ads.page.AdSplashActivity',
      rules: [
        {
          matches:
            '[text="去微信看看"] < FrameLayout <n FrameLayout[childCount=2] -n FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13163314',
        },
      ],
    },
  ],
});
