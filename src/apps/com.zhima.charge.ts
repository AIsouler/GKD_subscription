import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhima.charge',
  name: '天天充电',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13576613',
    },
  ],
});
