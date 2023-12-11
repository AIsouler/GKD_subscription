import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.linlic.ccmtv.yx',
  name: 'CCMTV临床频道',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.linlic.ccmtv.yx:id/btn_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13625401',
    },
  ],
});
