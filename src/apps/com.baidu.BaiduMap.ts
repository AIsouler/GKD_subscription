import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '局部广告-地图上方黄页横幅',
      quickFind: true,
      activityIds: [
        'com.baidu.baidumaps.MapsActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
        'com.lbe.security.ui.CountdownDialogActivity',
      ],
      rules: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12642301',
        'https://i.gkd.li/import/12801465',
        'https://i.gkd.li/import/12909281',
      ],
    },
    {
      key: 2,
      name: '局部广告-打车界面右侧悬浮球',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
      snapshotUrls: 'https://i.gkd.li/import/12642307',
    },
    {
      enable: false,
      key: 3,
      name: '全屏广告-美食大礼包弹窗',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12642310',
    },
    {
      enable: false,
      key: 4,
      name: '全屏广告-酒店提前订弹窗',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[id="lottie_box"] + TextView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12642319',
    },
    {
      enable: false,
      key: 5,
      name: '定位提示-请求定位弹窗',
      quickFind: true,
      activityIds: [
        'com.baidu.mapframework.widget.BMBaseDialog',
        'com.baidu.baidumaps.MapsActivity',
      ],
      rules: [
        {
          matches:
            '[text^="开启位置服务"] + RelativeLayout > [id="com.baidu.BaiduMap:id/tv_notip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12660884',
        },
        {
          matches:
            '[text="需开启系统定位服务开关"] +2 [id="com.baidu.BaiduMap:id/ll_dialog_btn"] > [id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/12660883',
        },
        {
          matches:
            'ImageView[id="com.baidu.BaiduMap:id/location_dialog_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/import/12909299',
        },
      ],
    },
    {
      enable: false,
      key: 6,
      name: '全屏广告-打车界面弹窗广告',
      quickFind: true,
      activityIds: [
        'com.baidu.baidumaps.MapsActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      ],
      rules:
        'ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12909300',
        'https://i.gkd.li/import/12930699',
      ],
    },
    {
      enable: false,
      key: 7,
      name: '更新提示',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
      snapshotUrls: 'https://i.gkd.li/import/12909385',
    },
    {
      enable: false,
      key: 8,
      name: '通知提示-请求打开通知权限弹窗',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules:
        '[text="打开通知权限"] <n LinearLayout + ImageView[id="com.baidu.BaiduMap:id/push_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13258995',
    },
    {
      enable: false,
      key: 9,
      name: '功能类-通勤卡添加至桌面',
      desc: '点击取消',
      quickFind: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'TextView[id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13439258',
        },
      ],
    },
  ],
});
