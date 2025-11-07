import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xstore.sevenfresh',
  name: '七鲜',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.modules.MainActivity',
          matches: '[vid="closed_img"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fd3abb40-d339-49cf-a6c8-83eedf1451b4',
          snapshotUrls: 'https://i.gkd.li/i/23021853',
        },
      ],
    },
  ],
});
