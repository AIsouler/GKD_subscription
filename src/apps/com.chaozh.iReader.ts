import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chaozh.iReader',
  name: 'VIVO 电子书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13659604',
    },
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
