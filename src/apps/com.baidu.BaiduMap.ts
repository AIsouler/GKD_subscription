import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f03b3648-757a-48e3-bd3b-098f8293edbf',
          snapshotUrls: 'https://i.gkd.li/i/16556555',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-地图上方黄页横幅',
      fastQuery: true,
      activityIds: [
        'com.baidu.baidumaps.MapsActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
        'com.lbe.security.ui.CountdownDialogActivity',
      ],
      rules: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12642301',
        'https://i.gkd.li/i/12801465',
        'https://i.gkd.li/i/12909281',
      ],
    },
    {
      key: 2,
      name: '局部广告-打车界面右侧悬浮球',
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
      snapshotUrls: 'https://i.gkd.li/i/12642307',
    },
    {
      key: 3,
      name: '全屏广告-美食大礼包弹窗',
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12642310',
    },
    {
      key: 4,
      name: '全屏广告-酒店提前订弹窗',
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[id="lottie_box"] + TextView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12642319',
    },
    {
      key: 5,
      name: '权限提示-定位权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      activityIds: [
        'com.baidu.mapframework.widget.BMBaseDialog',
        'com.baidu.baidumaps.MapsActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '[text^="开启位置服务"] + RelativeLayout > [id="com.baidu.BaiduMap:id/tv_notip_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12660884',
        },
        {
          key: 1,
          matches:
            '[text="需开启系统定位服务开关"] +2 [id="com.baidu.BaiduMap:id/ll_dialog_btn"] > [id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12660883',
        },
        {
          key: 2,
          matches:
            'ImageView[id="com.baidu.BaiduMap:id/location_dialog_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/12909299',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-打车界面弹窗广告',
      fastQuery: true,
      activityIds: [
        'com.baidu.baidumaps.MapsActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      ],
      rules:
        'ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12909300',
        'https://i.gkd.li/i/12930699',
      ],
    },
    {
      key: 7,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
      snapshotUrls: 'https://i.gkd.li/i/12909385',
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[vid="push_close"]',
      snapshotUrls: 'https://i.gkd.li/i/15284736',
    },
    {
      key: 9,
      name: '功能类-通勤卡添加至桌面',
      desc: '点击取消',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: ['[text="添加至桌面"]', '[text="取消"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13439258',
            'https://i.gkd.li/i/16920986', // 防止误触
          ],
        },
      ],
    },
  ],
});
