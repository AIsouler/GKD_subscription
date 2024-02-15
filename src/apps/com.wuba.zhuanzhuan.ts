import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wuba.zhuanzhuan',
  name: '转转',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="下次再说"] +2 [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/14292849',
    },
  ],
});
