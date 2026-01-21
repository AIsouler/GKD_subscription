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
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
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
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
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
