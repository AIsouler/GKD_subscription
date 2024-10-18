import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gentle.ppcat',
  name: '皮皮喵',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '@FrameLayout - LinearLayout >2 [text$="惊喜奖励"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12777048',
            'https://i.gkd.li/i/12858015',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text="放弃奖励离开"]',
          snapshotUrls: 'https://i.gkd.li/i/15008493',
        },
        {
          key: 2,
          matches: '@ImageView - WebView > [text="优量汇-插屏视频endcard"]',
          snapshotUrls: 'https://i.gkd.li/i/12777051',
        },
        {
          key: 3,
          matches: '[desc="关闭喵"]',
          snapshotUrls: 'https://i.gkd.li/i/13797494',
        },
      ],
    },
  ],
});
