import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chaozh.iReader',
  name: 'VIVO 电子书',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '权限弹窗',
      quickFind: true,
      matchTime: 10000,
      rules: [
        {
          matches: 'Button[text="前往开启"] - Button[text="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13627649',
        },
      ],
    },
  ],
});
