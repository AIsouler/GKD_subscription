import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jsguohua.youquanmall.tt',
  name: '图图影视',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.zero.flutter_qq_ads.page.AdSplashActivity',
      rules: [
        {
          matches: '[text^="跳过"][text.length<=3]',
          snapshotUrls: 'https://i.gkd.li/import/import/13163305',
        },
      ],
    },
    {
      key: 1,
      name: '应用内弹窗',
      activityIds: 'com.zero.flutter_qq_ads.page.AdSplashActivity',
      rules: [
        {
          matches:
            '[text="去微信看看"] < FrameLayout <n FrameLayout[childCount=2] -n FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/import/13163314',
        },
      ],
    },
  ],
});
