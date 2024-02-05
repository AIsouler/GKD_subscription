import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.black.unique',
  name: '全球购骑士特权',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      activityIds: 'com.black.unique.feature.home.HomeActivity',
      rules: [
        {
          matches: '@ImageView[id="com.black.unique:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13499502',
        },
      ],
    },
  ],
});
