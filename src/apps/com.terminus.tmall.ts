import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.terminus.tmall',
  name: '金币云商',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[text^="跳过"][text.length<=5]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13199252',
        },
      ],
    },
  ],
});
