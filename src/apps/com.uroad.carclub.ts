import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.uroad.carclub',
  name: 'ETC车宝',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.uroad.carclub.main.activity.MainActivity',
          matches:
            'View[childCount=4] > @TextView[index=2][clickable=true] <<n [vid="ad_container_fl"]',
          snapshotUrls: 'https://i.gkd.li/i/13800067',
        },
      ],
    },
  ],
});
