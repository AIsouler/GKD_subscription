import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.paget96.batteryguru',
  name: 'Battery Guru',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击[移除广告]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'activities.MainActivity',
          matches: '[vid="remove_ads"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/81d94f93-2308-4401-a151-771e5a94b79a',
          snapshotUrls: 'https://i.gkd.li/i/17538140',
        },
      ],
    },
  ],
});
