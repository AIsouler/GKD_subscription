import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vivo.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '通知提示-请求通知权限授权弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@Button[text*="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/13440881',
        },
      ],
    },
  ],
});
