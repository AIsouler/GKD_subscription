import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: [
        'com.ct.client.activity.MainActivity',
        'com.ct.client.activity.SplashActivity',
      ],
      rules: [
        {
          matches: '[id="com.ct.client:id/tvSkip"]',
        },
        {
          matches: '[id="com.ct.client:id/btSkip"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12508958',
            'https://i.gkd.li/import/12819736',
          ],
        },
      ],
    },
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
      name: '首页-取消升级',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.ct.client.activity.MainActivity',
        'com.ct.client.common.ConfirmDialogActivity',
      ],
      rules: 'LinearLayout > TextView[text="取消升级"]',
      snapshotUrls: ['https://i.gkd.li/import/12819594'],
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
