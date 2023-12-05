import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.honor.qinxuan',
  name: '荣耀亲选',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: '[text*="跳过"][id="cn.honor.qinxuan:id/tv_time"]',
      snapshotUrls: 'https://i.gkd.li/import/13541270',
    },
  ],
});
