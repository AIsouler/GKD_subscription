import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.luna.biz.ad.AdActivity',
      rules: '[id$="/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12514049',
    },
  ],
});
