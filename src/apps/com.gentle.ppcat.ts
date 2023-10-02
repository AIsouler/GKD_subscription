import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gentle.ppcat',
  name: '皮皮喵',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches:
            '[text$="惊喜奖励"] <n LinearLayout <2 LinearLayout + FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777048',
        },
        {
          key: 1,
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches: '[text="放弃奖励离开"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777058',
        },
        {
          key: 2,
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches: '@ImageView - WebView > [text="优量汇-插屏视频endcard"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777051',
        },
        {
          key: 3,
          activityIds: [
            'com.qq.e.ads.PortraitADActivity',
            'com.gentle.ppcat.MainActivity',
          ],
          matches: '[desc="关闭喵"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12777059',
            'https://gkd-kit.songe.li/import/12777054', // activityId: 'com.gentle.ppcat.MainActivity'
          ],
        },
      ],
    },
  ],
});
