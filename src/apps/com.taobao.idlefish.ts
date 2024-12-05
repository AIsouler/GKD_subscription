import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
          matches:
            '@ImageView[clickable=true][desc=null] < [desc^="开启系统通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13538351',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-手机信息权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.maincontainer.activity.MainActivity',
          matches: ['[text*="手机信息权限"]', '[text="取消"]'],
          exampleUrls: 'https://e.gkd.li/81e3e4d8-f297-4476-b22c-73f0b97879ee',
          snapshotUrls: 'https://i.gkd.li/i/13620277',
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
          activityIds: '.maincontainer.activity.MainActivity',
          matches: '[text="立即升级"] -2 [text="暂不升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13832272',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          matches:
            'WebView[text="Rax App"] > [id="root"] >6 View[index=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14551046',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-搜索结果页广告',
      rules: [
        {
          key: 0,
          action: 'longClick',
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          excludeMatches: '@[clickable=true] > [desc^="反馈成功"]',
          matches: '@[clickable=true] > [desc$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14723597',
          excludeSnapshotUrls: 'https://i.gkd.li/i/14723718',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches:
            '[desc^="不喜欢该商品"] > ImageView[index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14723632',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动点击[查看原图]',
      rules: [
        {
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches: '[desc="查看原图"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/12b60303-4fb8-4786-b636-4efef10f3d78',
          snapshotUrls: 'https://i.gkd.li/i/15463399',
        },
      ],
    },
  ],
});
