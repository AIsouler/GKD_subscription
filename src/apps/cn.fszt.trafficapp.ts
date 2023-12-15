import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.fszt.trafficapp',
  name: '畅驾',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13632400',
        },
      ],
    },
  ],
});
