import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaolan.tv.chat',
  name: '真不卡',
  groups: [
    {
      key: 1,
      name: '通知提示-温馨提示弹窗',
      desc: '点击[确定]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaolan.tv.chat.MainActivity',
          matches: '[desc="确定"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/884dc3b4-e60d-4b21-90c9-a68b96632070',
          snapshotUrls: 'https://i.gkd.li/i/15484133',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-看视频领奖励广告',
      desc: '点击关闭-点击[放弃奖励离开]',
      fastQuery: true,
      activityIds: 'com.qq.e.ads.PortraitADActivity',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[visibleToUser=true] < FrameLayout -2 * > [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15484070',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="放弃奖励离开"]',
          snapshotUrls: 'https://i.gkd.li/i/15484521',
        },
      ],
    },
  ],
});
