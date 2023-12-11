import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lanjinger.choiassociatedpress',
  name: '财联社',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="com.lanjinger.choiassociatedpress:id/iv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13627807',
    },
  ],
});
