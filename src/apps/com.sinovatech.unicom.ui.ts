import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sinovatech.unicom.ui:id/welcome_advertise_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12535185',
    },
  ],
});
