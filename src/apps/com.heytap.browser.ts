import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.browser',
  name: 'OPPO浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[text^="跳过"][text.length<=4][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12841168',
            'https://gkd-kit.gitee.io/import/13199536',
          ],
        },
      ],
    },
  ],
});
