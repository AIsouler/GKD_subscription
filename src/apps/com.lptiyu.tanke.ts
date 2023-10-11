import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lptiyu.tanke',
  name: '步道乐跑',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      activityIds: 'com.lptiyu.tanke.activities.main.MainActivity',
      rules:
        '[id="com.lptiyu.tanke:id/interact_ad_root"] >n [id="com.lptiyu.tanke:id/iv_close"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12829816',
        'https://gkd-kit.songe.li/import/12869344',
      ],
    },
  ],
});
