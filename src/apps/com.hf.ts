import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hf',
  name: '中国天气',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13477032',
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13625328',
        },
      ],
    },
  ],
});
