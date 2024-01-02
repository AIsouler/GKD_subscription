import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.daimajia.gold',
  name: '稀土掘金',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.daimajia.gold:id/iv_close"] -n LinearLayout [id="com.daimajia.gold:id/tv_title"][text="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/import/13498703',
    },
  ],
});
