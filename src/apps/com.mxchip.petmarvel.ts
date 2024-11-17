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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15102179',
        },
        {
          key: 1,
          position: {
            left: 'width * 0.8379',
            top: 'width * 0.2055',
          },
          excludeActivityIds:
            '[text*="跳过"][text.length<10][visibleToUser=true]',
          matches: 'FrameLayout[depth=0]',
          snapshotUrls: 'https://i.gkd.li/i/14717741',
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
