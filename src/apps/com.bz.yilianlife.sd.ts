import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bz.yilianlife.sd',
  name: '深(新)度搜索',
  deprecatedKeys: [0],
  groups: [
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
