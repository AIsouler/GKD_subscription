import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.yunma.school.app',
  name: '易校园',
  groups: [
    {
      key: 1,
      name: '功能类-打开应用后自动点击右上角扫一扫',
      desc: '仅开屏后触发一次',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.yunma.app.ui.main.MainActivity',
          matches: '[vid="fl_scan"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22451914',
        },
      ],
    },
  ],
});
