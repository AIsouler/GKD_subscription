import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.unionpay.activity.UPActivityMain'],
      rules: [
        {
          matches: '[id="com.unionpay:id/jump"][text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12705391',
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches: '@[text="稍候再说"] + [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/import/12727278',
        },
      ],
    },
    {
      key: 2,
      name: '支付完成界面广告卡片',
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
        {
          key: 0,
          matches: '[id="bannerBox"] >2 [text="广告"] + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13070564',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070974',
        },
      ],
    },
    {
      key: 9,
      name: '右侧悬浮广告',
      activityIds: ['com.unionpay.activity.UPActivityMain'],
      rules: [
        {
          matches:
            '[id="com.unionpay:id/frog_float"] >2 [id="com.unionpay:id/close_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695699',
        },
      ],
    },
    {
      key: 10,
      name: '定位权限悬浮弹窗',
      activityIds: ['com.unionpay.activity.UPActivityMain'],
      rules: [
        {
          matches:
            '[id="com.unionpay:id/locate_guide_view"] >2 [id="com.unionpay:id/locate_iv_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12694508',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '访问位置请求弹窗',
      desc: '自动点击【不允许】。默认关闭，请手动开启',
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches:
            '[text$="想访问您的位置信息"] < * +2 LinearLayout > [id="com.unionpay:id/btn_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695773',
        },
      ],
    },
    {
      enable: false,
      key: 12,
      name: '开启消息通知弹窗',
      desc: '默认关闭，请手动开启',
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches:
            '[text="开启消息通知"] < * + [id="com.unionpay:id/view_alert_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695736',
        },
      ],
    },
    {
      key: 13,
      name: '获得新勋章提示',
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches: 'TextView[text=\'炫耀一下\'] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13440341',
        },
      ],
    },
  ],
});
