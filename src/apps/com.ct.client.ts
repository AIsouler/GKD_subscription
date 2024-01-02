import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ct.client',
  name: '中国电信',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '用户引导',
      enable: false,
      quickFind: true,
      activityIds: 'com.ct.client.activity.UserGuideActivity',
      rules: '[id="com.ct.client:id/tvSkip"]',
      snapshotUrls: ['https://i.gkd.li/import/12508971'],
    },
    {
      key: 2,
      name: '更新弹窗',
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
      name: '浮窗广告',
      desc: '会出现在首页、查询办理页面',
      quickFind: true,
      activityIds: [
        'com.ct.client.common.ConfirmDialogActivity',
        'com.ct.client.activity.MainActivity',
      ],
      rules: [
        {
          matches: 'ImageView[id="com.ct.client:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12819676',
            'https://i.gkd.li/import/12913735',
          ],
        },
        {
          matches: 'ImageView[id="com.ct.client:id/ivFloatClose"]',
          snapshotUrls: ['https://i.gkd.li/import/13043345'],
        },
      ],
    },
    {
      key: 4,
      name: '业务办理-弹窗广告',
      // quickFind: true, 实机测试使用无法跳过
      activityIds: [
        'com.ct.client.common.webview.OnlineBusinessWebkitActivity',
      ],
      rules: 'Image[text="tishi-close"]',
      snapshotUrls: ['https://i.gkd.li/import/12913804'],
    },
    {
      key: 5,
      name: '消息-开启消息通知',
      desc: '自动点击关闭',
      // quickFind: true, 实机测试使用无法跳过
      activityIds: ['com.ct.client.activity.MainActivity'],
      rules: 'ImageView[id="com.ct.client:id/msg_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13043522'],
    },
  ],
});
