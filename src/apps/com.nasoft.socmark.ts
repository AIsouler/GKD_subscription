import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.nasoft.socmark',
  name: '手机性能排行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="取消"] + [text="更新"]',
      snapshotUrls: 'https://i.gkd.li/import/14332576',
    },
  ],
});
