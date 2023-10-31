import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.okcam.ookcam',
  name: '小鹰看看',
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
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13066267',
            'https://gkd-kit.gitee.io/import/13066200',
            'https://gkd-kit.gitee.io/import/13211691',
          ],
        },
      ],
    },
  ],
});
