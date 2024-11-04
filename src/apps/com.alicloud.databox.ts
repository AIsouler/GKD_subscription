import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 0,
      name: '功能类-自动签到',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alicloud.databox.MainActivity',
        'com.alicloud.databox.navigation.NavigationFragmentContainerActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[text="领取"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15573070', // 签到前
            'https://i.gkd.li/i/15573233', // 签到后
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: '[vid="ivCardBackBackground"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15144565',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules:
        '[id="com.alicloud.databox:id/webContainer"] >5 View[childCount=3] > TextView[index=1]',
      snapshotUrls: [
        'https://i.gkd.li/i/13228610',
        'https://i.gkd.li/i/14235204',
      ],
    },
    {
      key: 2,
      name: '功能类-时光设备间页面自动点击“开心收下”',
      activityIds:
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: 'View[childCount=9] > @Image -2 View[childCount=5]',
      snapshotUrls: 'https://i.gkd.li/i/13596924',
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text^="立即了解"] -3 @View[clickable=true] <<n [vid="webContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/13806865',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-[开启相册自动备份功能]弹窗',
      desc: '关闭弹窗',
      rules: [
        {
          activityIds: 'com.alicloud.databox.MainActivity',
          matches:
            '[vid="webContainer"] >5 View[childCount=4] > TextView[index=3][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14414446',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-扫描二维码登录时自动点击登录',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.taobao.login4android.scan.QrScanActivity',
          matches: '[text="确认并登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14414503', // 该页面不允许截图所以快照页面是黑屏，但不影响编写规则
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-[容量使用超限]提示',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alicloud.databox.MainActivity',
          matches: ['[text="容量使用超限"]', '[vid="layout_close"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/a219a480-c0a3-4064-832d-533f66995fed',
          snapshotUrls: 'https://i.gkd.li/i/15158788',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-卡片广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.alicloud.databox.transferpage.TransferListActivity',
          matches: '[vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/15433289',
        },
        // {
        //   误触，无法解决 https://i.gkd.li/i/17556779
        //   key: 1,
        //   activityIds: 'com.alicloud.databox.MainActivity',
        //   matches: '[vid="ivTitleAction"]',
        //   snapshotUrls: 'https://i.gkd.li/i/15524767',
        // },
      ],
    },
  ],
});
