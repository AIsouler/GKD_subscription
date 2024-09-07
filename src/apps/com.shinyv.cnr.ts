import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shinyv.cnr',
  name: '云听',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'yt.com.module.home.MainActivity',
          matches: '[vid="iv_close"]',
          exampleUrls: 'https://e.gkd.li/d1680c51-70c8-4d50-9560-f5e091685ee8',
          snapshotUrls: 'https://i.gkd.li/i/16914130',
        },
      ],
    },
  ],
});
