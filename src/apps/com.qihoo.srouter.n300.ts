import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qihoo.srouter.n300',
  name: '360家庭防火墙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/13216607',
        'https://i.gkd.li/import/13800007',
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[vid="app_update_later_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13800011',
    },
  ],
});
