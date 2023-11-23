import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'fit.flutter.dsm_helper',
  name: '群晖助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13450752',
        'https://i.gkd.li/import/13445496',
      ],
    },
  ],
});
