import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '局部广告-阅读页面广告',
      activityIds: [
        'com.dragon.read.ad.banner.ui',
        'com.dragon.read.reader.ReaderActivity',
        'com.dragon.read.reader.ui.ReaderActivity',
      ],
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] - LinearLayout >(2,3) [text="广告" || text="立享优惠" || text*="查看" || text^="立即"][text.length<5]',
          snapshotUrls: [
            'https://i.gkd.li/i/12908734',
            'https://i.gkd.li/i/14540281',
            'https://i.gkd.li/i/18138903',
            'https://i.gkd.li/i/21623147',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.reader.ui.ReaderActivity',
          matches: '[id="com.dragon.read:id/close_button"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3de0d5d9-0c02-4fe7-b5e8-b9fdb6688f8e',
          snapshotUrls: 'https://i.gkd.li/i/13520314',
        },
        {
          key: 3,
          fastQuery: true,
          matches: '[text="关闭此条广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/cf9d0574-dc89-4f03-ba01-eb9bcc97925f',
          snapshotUrls: 'https://i.gkd.li/i/14540281',
        },
        {
          key: 4,
          matches:
            'HorizontalAndVerticalScrollView > FrameLayout[childCount>=13] >(7,8,9) @FrameLayout[index=2][clickable=true] > ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/0129e5a7-ead1-4b92-a008-708632e5a927',
          snapshotUrls: [
            'https://i.gkd.li/i/14548657',
            'https://i.gkd.li/i/14622531',
            'https://i.gkd.li/i/14810480',
          ],
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.reader.ui.ReaderActivity',
          matches:
            '@[clickable=true] >(1,2) [text="继续阅读下一页"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b571222b-4ac1-4ba8-9a2c-4439c531d6e4',
          snapshotUrls: [
            'https://i.gkd.li/i/13674556',
            'https://i.gkd.li/i/13843155',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['.update', '.pages.main.MainFragmentActivity'],
          matches: '@[text="以后再说"] + [text="优先体验"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12716477',
            'https://i.gkd.li/i/18175292',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页右侧悬浮广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.dragon.read.pages.main.MainFragmentActivity',
            'com.dragon.read.ad.openingscreenad.OpeningScreenADActivity',
          ],
          matches:
            '@ImageView[clickable=true][childCount=0][index=0][visibleToUser=true] < [childCount=3] < RelativeLayout < FrameLayout <2 [id="android:id/content"][childCount=3]',
          snapshotUrls: [
            'https://i.gkd.li/i/12716506',
            'https://i.gkd.li/i/13318796',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '电商惊喜券',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          fastQuery: true,
          matches:
            '@LynxFlattenUI[id=null][text=""][clickable=true] - [text="去逛商城"] -4 [text$="电商惊喜券"]',
          snapshotUrls: 'https://i.gkd.li/i/12910159',
        },
        {
          key: 1,
          name: '爆款好物一分购',
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/i/12878266',
        },
        {
          key: 2,
          name: '抽奖赢好礼',
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches: '@LynxFlattenUI[clickable=true] - [text="前往抽奖"]',
          exampleUrls:
            'https://m.gkd.li/57941037/77c4098a-818f-4d0f-8492-e98818d0da27',
          snapshotUrls: 'https://i.gkd.li/i/14292475',
        },
        {
          key: 3,
          name: '签到弹窗',
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@LynxFlattenUI[clickable=true][visibleToUser=true][text=""] -27 FlattenUIText[text^="立即签到"]',
          exampleUrls:
            'https://m.gkd.li/57941037/96afbb4f-afd5-4f64-948d-15fc7bb14075',
          snapshotUrls: 'https://i.gkd.li/i/15223416',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-阅读页面关注作者弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '@ImageView +2 FrameLayout >3 [text="关注"]',
          snapshotUrls: 'https://i.gkd.li/i/13399505',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-阅读页面广告',
      fastQuery: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: [
        {
          key: 0,
          name: '点击[反馈]按钮',
          matches: '[text="反馈"][visibleToUser=true][name$="UIText"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13520160',
            'https://i.gkd.li/i/13816453',
          ],
        },
        {
          key: 3,
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true] < FrameLayout - LinearLayout >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/c172db67-a489-488b-a5f5-35aa9657c444',
          snapshotUrls: 'https://i.gkd.li/i/18724040',
        },
        {
          preKeys: [0, 3],
          key: 1,
          name: '点击[不感兴趣]/[关闭此广告]',
          matches: '[text="不感兴趣" || text="关闭此广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13520219',
            'https://i.gkd.li/i/13674550',
            'https://i.gkd.li/i/13816454',
            'https://i.gkd.li/i/14913207',
            'https://i.gkd.li/i/18724041',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '评价提示-请求好评弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.pages.main.MainFragmentActivity',
          matches: '@ImageView[clickable=true] +3 * > [text="五星好评"]',
          snapshotUrls: 'https://i.gkd.li/i/14395093',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击"取消"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.widget.ConfirmDialogBuilder',
            '.pages.main.MainFragmentActivity',
          ],
          matches: [
            '[text="开启推送提醒"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12716592',
            'https://i.gkd.li/i/21589667',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告',
      desc: '点击"关闭"',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches:
            'TextView[text="广告"] +2 Button[id="com.dragon.read:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13191156',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-会员福利弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] +5 [text="领取限时福利"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14430326',
            'https://i.gkd.li/i/14969861',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '功能类-关闭广告声音',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: 'LynxFlattenUI[text="开启声音"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7dcb8002-607b-4a0a-8ef7-cfa351fcc388',
          snapshotUrls: 'https://i.gkd.li/i/20989168',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20991240',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-观看广告后点击获得听书时长旁边的关闭按钮',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches:
            '@LynxFlattenUI[clickable=true] -2 [text="获得听书时长"] -n FlattenUIText[text="广告"]',
          exampleUrls: 'https://e.gkd.li/8f6a6b4b-b189-48b8-a068-d66514b244e3',
          snapshotUrls: 'https://i.gkd.li/i/20989165',
        },
      ],
    },
    {
      key: 17,
      name: '评价提示-点评此书弹窗',
      desc: '点击[取消]',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.reader.ui.ReaderActivity',
          matches: ['[text="点评此书"]', '[text="取消"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/21589381',
        },
      ],
    },
    {
      key: 18,
      name: '功能类-观看广告后点击领取奖励',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches:
            '@[text="领取奖励"][clickable=true] + FlattenUIText[text="领取奖励"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/36d56a8d-7a3e-4bba-9c2b-59dfda1f1813',
          snapshotUrls: 'https://i.gkd.li/i/21848210',
        },
      ],
    },
  ],
});
