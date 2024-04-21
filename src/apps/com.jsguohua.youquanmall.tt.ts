import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jsguohua.youquanmall.tt',
  name: '图图影视',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.zero.flutter_qq_ads.page.AdSplashActivity',
      rules: [
        {
          matches:
            '[text="去微信看看"] < FrameLayout <n FrameLayout[childCount=2] -n FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13163314',
        },
      ],
    },
  ],
});
