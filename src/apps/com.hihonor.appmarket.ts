import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="tv_operation_skip"]',
          exampleUrls: 'https://e.gkd.li/549d5fc1-20a2-42aa-b249-4cc8896807e6',
          snapshotUrls: 'https://i.gkd.li/i/16406381',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.hihonor.android.launcher.unihome.UniHomeLauncher',
            'com.hihonor.appmarket.module.main.MainActivity',
          ],
          matches: '[id="com.hihonor.appmarket:id/iv_dialog_operation_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13063815',
            'https://i.gkd.li/i/13168440',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮窗小广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.main.MainActivity',
          matches: '[id="com.hihonor.appmarket:id/iv_floating_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13063928',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: '.module.main.MainActivity',
          matches:
            'TextView[text="接收通知"] < LinearLayout < LinearLayout +n [id="android:id/buttonPanel"] Button[text="否"]',
          snapshotUrls: 'https://i.gkd.li/i/13073319',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-个性化内容推荐提示',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.main.MainActivity',
          matches: [
            '[text*="个性化的内容推荐"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/12825cd1-cd11-40eb-80e3-45d93c9ad058',
          snapshotUrls: 'https://i.gkd.li/i/21884571',
        },
      ],
    },
  ],
});
