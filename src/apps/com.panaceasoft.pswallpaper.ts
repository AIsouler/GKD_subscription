import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.panaceasoft.pswallpaper',
  name: 'ClrvAI',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: '.xiao.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="cb_ignore"][checked=false]',
          exampleUrls: 'https://e.gkd.li/b92e4e94-fafc-47b1-9774-3126cfaed981',
          snapshotUrls: 'https://i.gkd.li/i/14141561',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b92e4e94-fafc-47b1-9774-3126cfaed981',
          snapshotUrls: 'https://i.gkd.li/i/14141561',
        },
      ],
    },
  ],
});
