import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.antutu.ABenchMark',
  name: '安兔兔评测',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/13233875',
        'https://i.gkd.li/import/13538328',
      ],
    },
    {
      key: 1,
      name: '广告卡片',
      activityIds: 'com.android.module.app.ui.test.activity.ActivityTestResult',
      rules: '[text="广告"] + TextView + View > TextView',
      snapshotUrls: 'https://i.gkd.li/import/13234012',
    },
  ],
});
