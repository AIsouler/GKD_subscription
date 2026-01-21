import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxchip.petmarvel',
  name: '滴宠生活',
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
          snapshotUrls: 'https://i.gkd.li/i/15102179',
        },
        {
          key: 2,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/ab86d0ac-00f3-46e5-bfbc-c6a37c1c5a23',
          snapshotUrls: 'https://i.gkd.li/i/23600688',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-左上角卡片弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.mxchip.petmarvel.device.panel.DevicePanelActivity',
          matches:
            'View[childCount=19] > View[index=1] > Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13989316',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mxchip.petmarvel.MainActivity',
          matches: '[vid="iv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/de4ea9ad-c85f-4ace-bd4e-7b7fc9adbc2a',
          snapshotUrls: 'https://i.gkd.li/i/14717743',
        },
      ],
    },
  ],
});
