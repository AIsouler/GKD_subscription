import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sys.washmashine',
  name: '小依',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      ignoreGlobalGroupMatch: true,
      rules: [
        {
          fastQuery: true,
          matches: '@[desc="skip_button"][clickable=true] - [text="跳过"]',
          exampleUrls: 'https://e.gkd.li/b0d7d8e3-fc68-4be8-aba0-c8100d4143fb',
          snapshotUrls: 'https://i.gkd.li/i/22274999',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.mvp.activity.SplashAy',
          matches:
            '@[desc="top_close_button"][clickable=true] < ViewGroup <n ViewGroup + ViewGroup >3 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6817d76f-84fc-46af-9ed5-52388981841a',
          snapshotUrls: 'https://i.gkd.li/i/22275000',
        },
      ],
    },
  ],
});
