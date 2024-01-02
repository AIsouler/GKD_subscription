import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.uroad.carclub',
  name: 'ETC车宝',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.uroad.carclub.main.activity.MainActivity',
          matches:
            '[id="com.uroad.carclub:id/ad_container_fl"] >n View[childCount=4] > TextView[index=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13800067',
        },
      ],
    },
  ],
});
