import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '@[text="稍候再说"] + [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/12727278',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-支付完成界面卡片广告',
      quickFind: true,
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
        {
          key: 0,
          matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13070564',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13070974',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-右侧悬浮广告',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          position: {
            left: 'width * 0.8893',
            top: 'width * 0.4607',
          },
          activityIds: 'com.unionpay.activity.UPActivityMain',
          matches:
            '@[vid="frog_float"][visibleToUser=true] >2 [vid="close_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/0f4f6a7f-55ce-4f87-a4cb-97e9c7107359',
          snapshotUrls: 'https://i.gkd.li/i/14586427',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-定位权限',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.unionpay:id/view_locate_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13634882',
        },
        {
          key: 1,
          matches: ['[text*="访问您的位置信息"]', '[text="不允许"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/12695773',
            'https://i.gkd.li/i/14209001',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text="开启消息通知"] < * + [id="com.unionpay:id/view_alert_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12695736',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-天天签到-获得新勋章提示',
      desc: '点击左上角返回',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13440341',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-我的页面-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.unionpay.activity.UPActivityMain',
      rules:
        '[id="com.unionpay:id/container"] + [id="com.unionpay:id/image"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13440341',
    },
    {
      key: 15,
      quickFind: true,
      name: '全屏广告-领取优惠弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            '[id="com.unionpay:id/view_content_container"] View[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13848688',
        },
      ],
    },
  ],
});
