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
        '.MainActivity',
        '.navigation.NavigationFragmentContainerActivity',
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
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@TextView[clickable=true][visibleToUser=true] - Image[text!=null] < View < View < View < WebView < WebView < [vid="webContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/14235204',
        },
      ],
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
          activityIds: '.MainActivity',
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
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@TextView[childCount=0][clickable=true][visibleToUser=true] <4 View[childCount=4] < View < View < WebView < WebView < [vid="webContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/14414446',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-扫描二维码登录时自动点击登录',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
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
      ],
    },
  ],
});
