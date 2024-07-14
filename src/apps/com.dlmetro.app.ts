import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dlmetro.app',
  name: '大连交通e出行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bwton.metro.tabindicator.business.MainTabActivity',
          matches: '[vid="iv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/78f79ab0-c224-40b8-9cae-e4a3366660db',
          snapshotUrls: 'https://i.gkd.li/i/15369247',
        },
      ],
    },
  ],
});
