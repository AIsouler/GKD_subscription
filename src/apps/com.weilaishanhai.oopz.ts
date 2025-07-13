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
      ],
    },
  ],
});
