import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
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
          action: 'clickCenter',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bde5c1a5-3259-45d3-a6b8-8482f7818c6f',
          snapshotUrls: 'https://i.gkd.li/i/17056504',
        },
        {
          key: 1,
          action: 'clickCenter',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6537da92-f5f6-4ee8-9219-5f39f7c5e8a2',
          snapshotUrls: 'https://i.gkd.li/i/17068758',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          matches:
            '[text^="广告"] + [text="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13985169', // 播放界面
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@[desc="关闭"][clickable=true] -(1,2) [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206534', //歌单页
            'https://i.gkd.li/i/13797001', //我的页
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206982',
            'https://i.gkd.li/i/13218134',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@[clickable=true][visibleToUser=true] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15041019',
            'https://i.gkd.li/i/18227243',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18219557',
        },
        {
          key: 5,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            'RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15756931',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ImageView[clickable=true] - [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17450309',
        },
        {
          key: 7,
          fastQuery: true,
          activityIds: '.activity.AppStarterActivity',
          matches: '[text="广告 | 关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18227204',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          matchTime: 10000,
          activityIds:
            'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
          matches: '@View[clickable=true][visibleToUser=true][desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13115121',
            'https://i.gkd.li/i/14549936',
            'https://i.gkd.li/i/14798904',
            'https://i.gkd.li/i/15209764',
            'https://i.gkd.li/i/15261116',
            'https://i.gkd.li/i/17459008',
          ],
        },
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches: '[desc="关闭弹窗"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/47107dd3-b19a-4486-a0d1-6d9aa62ee722',
          snapshotUrls: 'https://i.gkd.li/i/17057551',
        },
        {
          key: 2,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true][width<120 && height<120] <3 FrameLayout[childCount=3] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/881cddd2-e4ec-472e-8bf8-00f26f61cbc4',
          snapshotUrls: 'https://i.gkd.li/i/18439138',
        },
        {
          key: 3,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true][width<120 && height<120] < FrameLayout < FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/20745872',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示-内测体验弹窗',
      desc: '点击[不再提醒]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.AppStarterActivity',
          matches: '[text="抢先体验"] -2 [text="不再提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/13178485',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-免流弹窗',
      desc: '点击[流量够用]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.tencent.qqmusic.activity.AppStarterActivity',
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          ],
          matches: '[text="流量够用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197868',
            'https://i.gkd.li/i/15285647',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-看广告免费听歌弹窗',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches:
            '@ViewGroup[desc="关闭按钮"] - [desc^="看广告"] <2 ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13806773',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13806782',
        },
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches: '[desc$="不再提示"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e3d904e1-dfe5-4d12-b8c8-b1eead8459c9',
          snapshotUrls: 'https://i.gkd.li/i/18428240',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-高品质音质弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          activityIds:
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          matches:
            '[id="android:id/content"] >4 FrameLayout[childCount=6] > FrameLayout[childCount=1][text=null][index=1] > ImageView[visibleToUser=true][childCount=0]',
          exampleUrls: 'https://e.gkd.li/bde2d326-6b44-4d4d-b8f6-8bfeb97d7e29',
          snapshotUrls: 'https://i.gkd.li/i/16914135',
        },
      ],
    },
    {
      key: 8,
      name: '评价提示-好评弹窗',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.AppStarterActivity',
          matches: '@[vid="close_btn"] - * > [text*="好评"]',
          snapshotUrls: 'https://i.gkd.li/i/14881903',
        },
      ],
    },
    {
      key: 9,
      name: '分段广告-评论区广告',
      desc: '点击右下角展开-点击[不感兴趣]',
      activityIds:
        'com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar',
      rules: [
        {
          key: 0,
          matches:
            'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
          snapshotUrls: 'https://i.gkd.li/i/15010210',
        },
        {
          preKeys: [0],
          key: 99,
          fastQuery: true,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15010226',
        },
      ],
    },
    {
      key: 11,
      name: '其他-播放页[猜你也会喜欢]推荐',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.business.playernew.view.NewPlayerActivity',
          matches:
            '@ImageView[childCount=0][clickable=true] -2 [text="猜你也会喜欢"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/40846baf-4638-4740-970a-30924cbd9414',
          snapshotUrls: 'https://i.gkd.li/i/18410610',
        },
      ],
    },
  ],
});
