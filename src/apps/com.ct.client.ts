import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15084759',
            'https://i.gkd.li/i/15079224', // 全局规则在此页面误触
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-软件更新/安装后的用户引导',
      fastQuery: true,
      activityIds: 'com.ct.client.activity.UserGuideActivity',
      rules: '[id="com.ct.client:id/tvSkip"]',
      snapshotUrls: 'https://i.gkd.li/i/12508971',
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: 'LinearLayout > [text="取消升级"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12819594',
        'https://i.gkd.li/i/13316168',
        'https://i.gkd.li/i/13695096',
      ],
    },
    {
      key: 3,
      name: '全屏广告-浮窗广告',
      desc: '会出现在首页、查询办理页面',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.ct.client.common.ConfirmDialogActivity',
        'com.ct.client.activity.MainActivity',
      ],
      rules: [
        {
          matches: '[vid="rlActivity"] > [vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12819676',
            'https://i.gkd.li/i/15104434',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      // fastQuery: true, 实机测试使用无法跳过
      activityIds: 'com.ct.client.common.webview.OnlineBusinessWebkitActivity',
      rules: 'Image[text="tishi-close"]',
      snapshotUrls: 'https://i.gkd.li/i/12913804',
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      desc: '自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      // fastQuery: true, 实机测试使用无法跳过
      rules: [
        {
          key: 0,
          matches: 'ImageView[id="com.ct.client:id/msg_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13043522',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.ct.client.activity.MainActivity',
          matches: '[text^="开启消息通知"] <n * > [vid="ivClose"]',
          snapshotUrls: 'https://i.gkd.li/i/15209597',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-右下角客服悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ct.client.MainActivity',
          matches: '[id="com.ct.client:id/close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3a14e0ac-ce6a-411d-9f92-e50da5165119',
          snapshotUrls: 'https://i.gkd.li/i/14133742',
        },
        {
          activityIds: 'com.ct.client.activity.MainActivity',
          matches: '[id="com.ct.client:id/ivFloatClose"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a97bf7a2-6e35-4922-ad0d-8677fca79f7c',
          snapshotUrls: 'https://i.gkd.li/i/13043345',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ct.client.activity.MainActivity',
          matches: '[vid="ivFloatClose"]',
          exampleUrls:
            'https://m.gkd.li/57941037/5dd9c9e3-f290-4b73-abdd-dc5e97a99772',
          snapshotUrls: 'https://i.gkd.li/i/15137220',
        },
      ],
    },
  ],
});
