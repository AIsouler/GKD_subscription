import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zol.android',
  name: '中关村在线',
  groups: [
    {
      key: 0,
      name: '局部广告-首页悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.renew.ui.MainActivity',
          matches:
            '@[vid="close_active"][visibleToUser=true] + [vid="active_enter_layout"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ac4f334e-54e7-4df8-b708-2ad101962b4c',
          snapshotUrls: 'https://i.gkd.li/i/17965705',
        },
      ],
    },
  ],
});
