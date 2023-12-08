import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'xin.banghua.beiyuan0',
  name: '小贝乐园平台',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          matches: '[text*="跳过"][text.length<=10]',
          exampleUrls:
            'https://m.gkd.li/58279234/eaa5ddd9-734a-40fe-9295-f89e1984ac8c',
          snapshotUrls: 'https://i.gkd.li/import/13596389',
        },
      ],
    },
  ],
});
