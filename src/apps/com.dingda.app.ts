import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dingda.app',
  name: '叮嗒出行',
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
          matches: [
            '[id="com.dingda.app:id/adContent"]',
            '[id!=null][id="com.byted.pangle:id/tt_splash_skip_btn"]', // 不能 quickFind
          ],
          snapshotUrls: 'https://i.gkd.li/import/13290327',
        },
      ],
    },
  ],
});
