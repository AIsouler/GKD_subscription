import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nasoft.socmark',
  name: '手机性能排行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '@[text="取消"] + [text="更新"]',
      snapshotUrls: 'https://i.gkd.li/i/14332576',
    },
  ],
});
