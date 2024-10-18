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
      activityIds: [
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
        'com.hihonor.appmarket.module.main.MainActivity',
      ],
      rules: '[id="com.hihonor.appmarket:id/iv_dialog_operation_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13063815',
        'https://i.gkd.li/i/13168440',
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮窗小广告',
      fastQuery: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules: '[id="com.hihonor.appmarket:id/iv_floating_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13063928',
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules:
        'TextView[text="接收通知"] < LinearLayout < LinearLayout +n [id="android:id/buttonPanel"] Button[text="否"]',
      snapshotUrls: 'https://i.gkd.li/i/13073319',
    },
  ],
});
