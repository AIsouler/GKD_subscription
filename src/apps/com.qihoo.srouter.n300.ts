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
      rules: [
        {
          matches: '[id="com.qihoo.srouter.n300:id/tv_countdown"]',
          snapshotUrls: 'https://i.gkd.li/import/import/13216607',
        },
      ],
    },
  ],
});
