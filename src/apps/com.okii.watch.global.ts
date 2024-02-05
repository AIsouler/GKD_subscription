import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.okii.watch.global',
  name: '小天才',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.okii.watch.global:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13630943',
    },
    {
      key: 2,
      name: '未分类-手表安全守护弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: {
        activityIds: 'com.xtc.widget.phone.popup.activity.CustomActivity13',
        matches: '[id="com.okii.watch.global:id/photo_sensitive_close"]',
        exampleUrls:
          'https://m.gkd.li/57941037/8a5030a1-2b24-4a8a-a944-29d0eaabf936',
        snapshotUrls: 'https://i.gkd.li/import/13630944',
      },
    },
  ],
});
