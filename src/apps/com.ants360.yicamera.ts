import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ants360.yicamera',
  name: '小蚁摄像机',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/13463241',
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +3 ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13543175',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '@[vid="ivClose"] - [text="专属福利"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a7ba5126-27dd-450d-abf9-c3a8b6938727',
          snapshotUrls: 'https://i.gkd.li/i/18410909',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.xiaoyi.yiplayer.ui.PlayerActivity',
            '.activity.MainActivity',
          ],
          matches: [
            '[text="开启通知"][visibleToUser=true]',
            '[text="暂不开启"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/1cb1471e-94a5-430f-ac2f-b031413a067e',
          snapshotUrls: [
            'https://i.gkd.li/i/18395740',
            'https://i.gkd.li/i/19503517',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c9e67d26-d65f-4e24-9f62-cc29f29cff9b',
          snapshotUrls: 'https://i.gkd.li/i/18406158',
        },
      ],
    },
  ],
});
