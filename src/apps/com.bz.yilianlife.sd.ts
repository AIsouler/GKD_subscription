import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bz.yilianlife.sd',
  name: '深(新)度搜索',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13766174',
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.deep.search.MainActivity',
          matches:
            '@ImageView[clickable=true] <3 ViewGroup -2 ViewGroup >n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13766176',
        },
      ],
    },
  ],
});
