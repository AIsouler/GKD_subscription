import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.gamereva',
  name: '腾讯先锋',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.tencent.gamereva:id/id_tv_time2go"][text*="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13536599',
    },
  ],
});
