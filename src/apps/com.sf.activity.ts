import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sf.activity',
  name: '顺丰速运',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.sf.activity.MainActivity',
      rules: ['[id="AdViewSkipBtn"] >(2) TextView[text^="跳过"]'],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642434',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.sf.activity.MainActivity',
      rules: ['@[text="取消"] < ViewGroup - ScrollView >(2) [text*="新版本"]'],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642445',
    },
    {
      key: 2,
      name: '专属月报弹窗',
      activityIds: 'com.sf.activity.MainActivity',
      rules: ['[id="MonthReportDialogCloseBtn"] > ImageView'],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642441',
    },
  ],
});
