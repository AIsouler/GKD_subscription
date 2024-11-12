import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text^="跳过广告"][text.length<=5]',
          snapshotUrls: 'https://i.gkd.li/i/17720149',
        },
      ],
    },
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            'TextView[text^="打开通知"] +2 [id="com.jd.jrapp:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13249998',
        },
        {
          key: 1,
          matches:
            '@View - * > [visibleToUser=true][text="开启并订阅通知"] <<n [id="com.jd.jrapp:id/webview"]',
          snapshotUrls: 'https://i.gkd.li/i/13255656',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@ImageButton[id="com.jd.jrapp:id/ib_close"] + RelativeLayout [text^="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/i/13628364',
    },
    {
      key: 3,
      name: '评价提示-满意度打分弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@ImageView[clickable=true] - [text$="满意度打几分？"]',
      snapshotUrls: 'https://i.gkd.li/i/13804561',
    },
  ],
});
