import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.mobile',
  name: '抖音',
  groups: [
    {
      key: 2,
      name: '功能类-发现通讯录好友弹窗',
      desc: '点击[暂时不要]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '@[text="暂时不要"] +2 [text="发现好友"]',
          exampleUrls:
            'https://m.gkd.li/57941037/af8632c4-f5fd-403a-aca9-daf92ec6cda1',
          snapshotUrls: 'https://i.gkd.li/i/14467944',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-定位权限',
      desc: '点击[以后再说]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[text^="你还没有开启位置权限"] +2 * > [text="以后再说"]',
          exampleUrls:
            'https://m.gkd.li/57941037/546e45cf-d151-47f4-830e-0f1b7ac21794',
          snapshotUrls: 'https://i.gkd.li/i/14614184',
        },
      ],
    },
  ],
});
