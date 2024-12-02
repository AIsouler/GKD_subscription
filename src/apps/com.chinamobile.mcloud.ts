import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: '.client.ui.setting.UpgradeActivity',
          matches: ['[text="发现新版本"]', '[vid="bn_cancel"]'],
          snapshotUrls: 'https://i.gkd.li/i/14297700',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: [
            'com.chinamobile.mcloud.client.ui.MenuActivity',
            'com.chinamobile.mcloud.client.ui.CustomScanActivity',
            'com.mcloud.login.ui.ConfirmLoginTvActivity',
          ],
          matches: '[id="com.chinamobile.mcloud:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13627826',
            'https://i.gkd.li/i/14549523',
            'https://i.gkd.li/i/14732062',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          matches:
            '@Image[clickable=true] < View -3 [text="马上领取"] < View < View < View < WebView < WebView < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13627832',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          matches:
            '[id="com.chinamobile.mcloud:id/iv_logo"] + [id="com.chinamobile.mcloud:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13627834',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-请求开启自动备份弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.client.ui.MenuActivity',
          matches:
            '[text="开启自动备份"] +4 [text="暂不设置"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13627830',
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.client.ui.MenuActivity',
          matches: '[vid="btn_push_notice_close_dialog"]',
          snapshotUrls: 'https://i.gkd.li/i/14882447',
        },
      ],
    },
  ],
});
