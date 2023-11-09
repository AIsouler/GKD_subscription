import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.douguo.recipe',
  name: '豆果美食',
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
          matches: '[id="com.douguo.recipe:id/ad_jump"] > [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/import/13215621',
        },
      ],
    },
  ],
});
