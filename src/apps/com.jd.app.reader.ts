import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.app.reader',
  name: '京东读书',
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
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/6f4561e5-b998-43f9-8848-b6b43d045a3d',
          snapshotUrls: 'https://i.gkd.li/i/14189228',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[vid="mJumpBtn"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/28a83ffc-ba28-4d0e-8f28-b48a4a542f23',
          snapshotUrls: 'https://i.gkd.li/i/16486457',
        },
        {
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.9007',
            top: 'width * 0.1603',
          },
          matches: '[id="com.jd.app.reader:id/animation_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ab677b66-4681-4672-a1d6-3b5938e7f374',
          snapshotUrls: 'https://i.gkd.li/i/13264389',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[text="下次再说"] +(2) [text="立即更新"]',
          snapshotUrls: ['https://i.gkd.li/i/12686632'],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jingdong.app.reader.main.ui.JdMainActivity',
          matches: '[vid="mCloseBtn"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ac85ef54-5180-4740-b12d-608b37ad5502',
          snapshotUrls: 'https://i.gkd.li/i/16486458',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-阅读页面弹窗广告',
      activityIds: 'com.jd.read.engine.activity.EngineReaderActivity',
      rules: '[id$="ad_read_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12881810',
        'https://i.gkd.li/i/12893631',
      ],
    },
  ],
});
