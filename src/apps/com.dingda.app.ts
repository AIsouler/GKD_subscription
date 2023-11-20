import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dingda.app',
  name: '叮嗒出行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      matchTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.byted.pangle:id/tt_splash_skip_btn"] <<n [id="com.dingda.app:id/adContent"]',
          snapshotUrls: 'https://i.gkd.li/import/13290327',
        },
        {
          actionMaximumKey: 0,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13403575',
        },
      ],
    },
  ],
});
