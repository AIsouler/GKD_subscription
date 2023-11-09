import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sf.activity',
  name: '顺丰速运',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.sf.activity.MainActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="AdViewSkipBtn"] >(2) TextView[text^="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12642434',
        'https://i.gkd.li/import/import/12901349', // com.bbk.launcher2.Launcher
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.sf.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[text="取消"] < ViewGroup - ScrollView >(2) [text*="新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12642445',
        },
        {
          key: 1,
          matches: '@[desc="取消"] - ViewGroup >n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13291144',
        },
      ],
    },
    {
      key: 2,
      name: '专属月报弹窗',
      activityIds: 'com.sf.activity.MainActivity',
      rules: ['[id="MonthReportDialogCloseBtn"] > ImageView'],
      snapshotUrls: 'https://i.gkd.li/import/import/12642441',
    },
  ],
});
