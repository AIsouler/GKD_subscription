import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tingfeng.tool',
  name: '囧次元',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.windmill.sdk.widget.InterstitialView',
            'app.video.guoguo.MainActivity',
          ],
          matches:
            '[vid="tobid_interstitial_skip_ll" || vid="tobid_splash_skip_ll"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/64670315-c171-42f9-a55a-5bedf29f24c3',
          snapshotUrls: [
            'https://i.gkd.li/i/21278557',
            'https://i.gkd.li/i/21282765',
          ],
        },
      ],
    },
  ],
});
