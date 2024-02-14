import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ct.client',
  name: '中国电信',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '功能类-软件更新/安装后的用户引导',
      enable: false,
      quickFind: true,
      activityIds: 'com.ct.client.activity.UserGuideActivity',
      rules: '[id="com.ct.client:id/tvSkip"]',
      snapshotUrls: ['https://i.gkd.li/import/12508971'],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: 'LinearLayout > [text="取消升级"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12819594',
        'https://i.gkd.li/import/13316168',
        'https://i.gkd.li/import/13695096',
      ],
    },
    {
      key: 3,
      name: '全屏广告-浮窗广告',
      desc: '会出现在首页、查询办理页面',
      quickFind: true,
      activityIds: ['com.ct.client.common.ConfirmDialogActivity'],
      rules: [
        {
          matches: 'ImageView[id="com.ct.client:id/close"]',
          snapshotUrls: ['https://i.gkd.li/import/12819676'],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      // quickFind: true, 实机测试使用无法跳过
      activityIds: [
        'com.ct.client.common.webview.OnlineBusinessWebkitActivity',
      ],
      rules: 'Image[text="tishi-close"]',
      snapshotUrls: ['https://i.gkd.li/import/12913804'],
    },
    {
      key: 5,
      name: '通知提示-开启消息通知弹窗',
      desc: '自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      // quickFind: true, 实机测试使用无法跳过
      rules: 'ImageView[id="com.ct.client:id/msg_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13043522',
    },
    {
      key: 6,
      name: '功能类-右下角客服悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ct.client.MainActivity',
          matches: '[id="com.ct.client:id/close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3a14e0ac-ce6a-411d-9f92-e50da5165119',
          snapshotUrls: 'https://i.gkd.li/import/14133742',
        },
        {
          activityIds: 'com.ct.client.activity.MainActivity',
          matches: '[id="com.ct.client:id/ivFloatClose"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a97bf7a2-6e35-4922-ad0d-8677fca79f7c',
          snapshotUrls: 'https://i.gkd.li/import/13043345',
        },
      ],
    },
  ],
});
