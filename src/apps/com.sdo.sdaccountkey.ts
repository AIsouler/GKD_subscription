import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sdo.sdaccountkey',
  name: '叨鱼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.shengqugames.permission.HelpActivity',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.sdo.sdaccountkey:id/tv_pass"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12934779',
        },
      ],
    },
  ],
});
