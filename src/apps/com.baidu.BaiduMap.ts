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
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f03b3648-757a-48e3-bd3b-098f8293edbf',
          snapshotUrls: 'https://i.gkd.li/i/16556555',
        },
        {
          key: 1,
          matches: '[vid="ms_skipView"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/cd89ffb7-6cd3-4978-b3d6-ef5ece2769d0',
          snapshotUrls: 'https://i.gkd.li/i/23742641',
        },
      ],
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
      key: 7,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
          snapshotUrls: 'https://i.gkd.li/i/12909385',
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[vid="push_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15284736',
        },
      ],
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
    {
      key: 10,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[vid="img_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22616256',
        },
      ],
    },
    {
      key: 11,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[vid="banner_ad_close_icon"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22656085',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/22616267',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/24633179',
        },
      ],
    },
  ],
});
