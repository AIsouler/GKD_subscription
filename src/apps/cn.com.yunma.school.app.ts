import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.yunma.school.app',
  name: '易校园',
  groups: [
    {
      key: 9,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      name: '功能类-打开应用自动扫一扫',
      desc: '仅开屏触发一次',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.yunma.app.ui.main.MainActivity',
          matches: '@[vid="fl_scan" && clickable=true] > [vid="iv_scan"]',
          snapshotUrls: 'https://i.gkd.li/i/22451914',
        },
      ],
    },
  ],
});
