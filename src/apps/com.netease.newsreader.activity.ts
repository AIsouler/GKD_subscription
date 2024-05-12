import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.newsreader.activity',
  name: '网易新闻',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="版本更新了"] +(2) RelativeLayout > [text="稍后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/12639884',
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击暂不开启',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '[text*="开启系统推送"] - ImageView < * < * < FrameLayout + FrameLayout >(3) Button[text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/12639800',
        },
        {
          key: 1,
          matches: '[text^="打开推送"] +(2) RelativeLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12639869',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-首页信息流广告',
      desc: '点击卡片广告x关闭按钮-关闭反馈理由弹窗',
      activityIds: 'com.netease.nr.phone.main.MainActivity',
      rules: [
        {
          preKeys: [1],
          name: '首页信息流广告-反馈理由',
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12639752',
        },
        {
          key: 1,
          matches:
            'FrameLayout[childCount=1] >5 TextView[text="广告"] +2 ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12639751',
        },
      ],
    },
  ],
});
