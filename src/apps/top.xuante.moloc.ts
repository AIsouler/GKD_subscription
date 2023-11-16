import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'top.xuante.moloc',
  name: '摩尼定位',
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
          key: 0,
          name: '【跳过+倒计时】型',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13346180',
        },
      ],
    },
  ],
});
