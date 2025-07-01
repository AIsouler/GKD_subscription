import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds:
            'com.sup.superb.m_teenager.view.EnterTeenagerModeDialogActivity',
          matches: '[text$="青少年模式"] + [text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/13796869',
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="开启推送通知"] +2 * > [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13691081',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-右上角红包悬浮窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sup.android.base.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] < RelativeLayout[childCount=2] < FrameLayout - [id="com.sup.android.superb:id/tab_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13624220',
        },
      ],
    },
    {
      key: 7,
      name: '更新提示',
      desc: '点击[我再想想]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="发现新版本"] +2 * > [text="我再想想"]',
          snapshotUrls: 'https://i.gkd.li/i/13858490',
        },
      ],
    },
    {
      key: 8,
      name: '评价提示',
      desc: '点击取消',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.sup.android.base.MainActivity',
            'com.sup.android.base.praise.PraiseDialogActivity',
          ],
          matches: ['[text^="喜欢皮皮虾吗"]', '[text="取消"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/14005608',
            'https://i.gkd.li/i/15285383',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告-集五福弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sup.android.base.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] <2 RelativeLayout[childCount=2] < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/246d1d0b-d493-4d40-bbb7-9c04ae6b457d',
          snapshotUrls: 'https://i.gkd.li/i/14151026',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-卡片广告',
      desc: '点击[关闭广告]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sup.android.base.MainActivity',
          matches: '[text="关闭广告"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/af1e7624-540b-4646-b812-3b748966e903',
          snapshotUrls: 'https://i.gkd.li/i/14471869',
        },
      ],
    },
    {
      key: 11,
      name: '分段广告-信息流广告',
      desc: '点击展开-点击[不感兴趣]',
      fastQuery: true,
      activityIds: 'com.sup.android.base.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            'RecyclerView > FrameLayout[id!=null] >4 FrameLayout[childCount=5] > ViewGroup[childCount=1] > @ImageView[clickable=true][childCount=0] <<n [vid="view_pager"]',
          snapshotUrls: 'https://i.gkd.li/i/14886478',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14886477',
        },
      ],
    },
  ],
});
