import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cqcsy.ifvod',
  name: '爱壹帆',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="以后再说"] +2 [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13798537',
    },
  ],
});
