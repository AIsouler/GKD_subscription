import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.documentsui',
  name: '文件',
  groups: [
    {
      key: 1,
      name: '允许第三方应用访问文件夹',
      activityIds: 'com.android.documentsui.picker.PickActivity',
      rules: '[text="取消"] + [text="允许"]',
      snapshotUrls: 'https://i.gkd.li/import/13801468',
    },
  ],
});
