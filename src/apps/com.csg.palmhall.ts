import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csg.palmhall',
  name: '南网在线',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="关闭"] + [text="升级"]',
      snapshotUrls: 'https://i.gkd.li/i/12700060',
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.csg.palmhall.MainActivity',
      rules: 'View > Image +(3) [text="不再显示"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12700075',
    },
    {
      key: 3,
      name: '通知提示-公告弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.csg.palmhall.MainActivity',
          matches:
            '[text$="公告"] - View[childCount=2] > Image[childCount=0][text=""]',
          exampleUrls: 'https://e.gkd.li/0ecc2a4e-6ab9-4c00-80fe-bbd23d181be8',
          snapshotUrls: 'https://i.gkd.li/i/16478559',
        },
      ],
    },
  ],
});
