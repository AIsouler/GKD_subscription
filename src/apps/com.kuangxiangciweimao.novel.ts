import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuangxiangciweimao.novel',
  name: '刺猬猫阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fda4f30d-877f-4131-ba56-b6a69e3b7e0c',
          snapshotUrls: 'https://i.gkd.li/i/16893223',
        },
        {
          key: 1,
          matches: '[id="com.kuangxiangciweimao.novel:id/mTasksView"]',
          snapshotUrls: 'https://i.gkd.li/i/13056248',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/8359b29b-b99e-4b6e-b748-a10a9f17005c',
          snapshotUrls: [
            'https://i.gkd.li/i/16901867',
            'https://i.gkd.li/i/16899125',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动签到',
      desc: '点击[签到]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.frame.MainFrameActivity',
          matches: 'Button[text="签到"]',
          snapshotUrls: 'https://i.gkd.li/i/16897712',
        },
      ],
    },
  ],
});
