import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wuba.zhuanzhuan',
  name: '转转',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '@[text="下次再说"] +2 [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14292849',
        },
        {
          key: 1,
          matches: '@[text="残忍拒绝"] +2 [text="立即安装"]',
          snapshotUrls: 'https://i.gkd.li/i/14392301',
        },
      ],
    },
  ],
});
