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
          snapshotUrls: 'https://i.gkd.li/i/13499502',
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      desc: '点击跳过',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.black.unique.feature.home.HomeActivity',
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/63a72bd6-72be-410c-86ab-09ba7a4fa318',
          snapshotUrls: 'https://i.gkd.li/i/14167393',
        },
      ],
    },
  ],
});
