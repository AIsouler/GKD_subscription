import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cloudy.component',
  name: '广汽传祺',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.cloudy.component:id/tv_main_jump"]',
      snapshotUrls: 'https://i.gkd.li/import/13458161',
    },
  ],
});
