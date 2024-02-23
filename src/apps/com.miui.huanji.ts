import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.huanji',
  name: '小米换机',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="下次再说"] + [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/i/14332463',
    },
  ],
});
