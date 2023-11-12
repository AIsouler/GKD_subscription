import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jsmcc',
  name: '中国移动江苏',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.jsmcc:id/ad_content"] [text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12830488',
            'https://i.gkd.li/import/12830580',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '版本更新',
      matchLauncher: true,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.jsmcc:id/cancelVersionTV"]',
          snapshotUrls: 'https://i.gkd.li/import/13327322',
        },
      ],
    },
  ],
});
