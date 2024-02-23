import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.scanner',
  name: '小爱视觉',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/i/14332513',
    },
  ],
});
