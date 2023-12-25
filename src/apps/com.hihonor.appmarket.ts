import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,

      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules: '[id="com.hihonor.appmarket:id/tv_operation_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13063925',
    },
    {
      key: 1,
      name: '广告弹窗',
      quickFind: true,

      activityIds: [
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
        'com.hihonor.appmarket.module.main.MainActivity',
      ],
      rules: '[id="com.hihonor.appmarket:id/iv_dialog_operation_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063815',
        'https://i.gkd.li/import/13168440',
      ],
    },
    {
      key: 2,
      name: '悬浮窗小广告',
      quickFind: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules: '[id="com.hihonor.appmarket:id/iv_floating_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13063928',
    },
    {
      key: 3,
      name: '推送通知',
      quickFind: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules:
        'TextView[text="接收通知"] < LinearLayout < LinearLayout +n [id="android:id/buttonPanel"] Button[text="否"]',
      snapshotUrls: 'https://i.gkd.li/import/13073319',
    },
  ],
});
