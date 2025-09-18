import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmall.campus.and',
  name: '天猫校园',
  groups: [
    {
      key: 7,
      name: '首页-全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tmall.campus.and.main.MainActivity',
          matches: '[vid="close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/22399316',
        },
      ],
    },
  ],
});
