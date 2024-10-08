import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.email',
  name: '电子邮件',
  groups: [
    {
      // 小米自带电子邮件
      key: 1,
      name: '权限提示-自启动',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.wps.multiwindow.main.HomeActivity',
          matches: [
            '[text^="检测到您的自启动权限未开启"]',
            '[text="取消"][clickable=true]',
          ],
          exampleUrls: 'https://e.gkd.li/1eacdaf8-1405-44d8-a9b9-228e913c5180',
          snapshotUrls: 'https://i.gkd.li/i/17276404',
        },
      ],
    },
  ],
});
