import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.health',
  name: '荣耀运动健康',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.hihonor.health.main.MainActivity',
          matches: '[id="com.hihonor.health:id/iv_close_filled"]',
          snapshotUrls: 'https://i.gkd.li/i/13759407',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hihonor.health.main.MainActivity',
          matches: '[vid="btn_close"][desc="关闭弹窗"]',
          exampleUrls: 'https://e.gkd.li/1ab101bd-59cb-46c0-bbb1-7a0a9dccf79a',
          snapshotUrls: 'https://i.gkd.li/i/16454150',
        },
      ],
    },
  ],
});
