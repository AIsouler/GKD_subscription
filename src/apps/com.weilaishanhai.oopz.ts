import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weilaishanhai.oopz',
  name: 'Oopz',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[name!$="RelativeLayout"] > [text*="跳过"][index=0][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fbb3e3c2-74d7-4b1b-8daa-48bab63189a4',
          snapshotUrls: [
            'https://i.gkd.li/i/21202366',
            'https://i.gkd.li/i/21202363',
            'https://i.gkd.li/i/21202366',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/21202513', // 虚假跳过按钮 https://github.com/AIsouler/GKD_subscription/issues/1043
        },
        {
          preKeys: [0], // 处理开屏广告的第二段
          fastQuery: true,
          matches:
            '@ImageView[id="com.wangmai.allmodules:id/wm_image_clear"] <2 RelativeLayout[childCount=2] < FrameLayout < [vid="wm_reward_main"]',
          exampleUrls: 'https://e.gkd.li/c1299341-66bf-4702-885c-3fbe5d648675',
          snapshotUrls: 'https://i.gkd.li/i/21202940',
        },
        {
          fastQuery: true,
          matches: '[id="com.wangmai.allmodules:id/wm_splash_jump_tv"]',
          exampleUrls: 'https://e.gkd.li/7ffc3e0d-3027-46ed-8833-96b638cbc4b3',
          snapshotUrls: 'https://i.gkd.li/i/21502192',
        },
        {
          fastQuery: true,
          matches: '[id="cj.mobile.wm.allmodules:id/wm_splash_jump_tv"]', // 与上面那条的后半部分一样....
          exampleUrls: 'https://e.gkd.li/9121689e-87da-44b8-997b-f276bfc6f975',
          snapshotUrls: 'https://i.gkd.li/i/21502971',
        },
        {
          fastQuery: true,
          matches:
            '[id="com.weilaishanhai.oopz:id/anythink_myoffer_splash_skip"]',
          exampleUrls: 'https://e.gkd.li/4c9eb5c0-7525-46a6-895b-9704f4f79100',
          snapshotUrls: 'https://i.gkd.li/i/21502992',
        },
      ],
    },
  ],
});
