import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.antutu.ABenchMark',
  name: '安兔兔评测',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      activityIds: 'com.android.module.app.ui.test.activity.ActivityTestResult',
      rules: '[text="广告"] + TextView + View > TextView',
      snapshotUrls: 'https://i.gkd.li/i/13234012',
    },
  ],
});
