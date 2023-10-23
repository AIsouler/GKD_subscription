import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: ['TextView[text^="跳过"][text.length<=5]'],
      snapshotUrls: [
        'https://i.gkd.li/import/12924598',
        'https://i.gkd.li/import/12909174',
        'https://i.gkd.li/import/12909201',
        'https://i.gkd.li/import/13074377',
      ],
    },
    {
      key: 1,
      name: '地图上方黄页横幅',
      quickFind: true,
      activityIds: [
        'com.baidu.baidumaps.MapsActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
        'com.lbe.security.ui.CountdownDialogActivity',
      ],
      rules: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12642301',
        'https://gkd-kit.gitee.io/import/12801465',
        'https://i.gkd.li/import/12909281',
      ],
    },
    {
      key: 2,
      name: '打车界面-右侧悬浮球',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642307',
    },
    {
      enable: false,
      key: 3,
      name: '美食大礼包弹窗',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642310',
    },
    {
      enable: false,
      key: 4,
      name: '酒店提前订弹窗',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[id="lottie_box"] + TextView[id=null][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642319',
    },
    {
      enable: false,
      key: 5,
      name: '请求定位弹窗',
      quickFind: true,
      activityIds: [
        'com.baidu.mapframework.widget.BMBaseDialog',
        'com.baidu.baidumaps.MapsActivity',
      ],
      rules: [
        {
          matches:
            '[text^="开启位置服务"] + RelativeLayout > [id="com.baidu.BaiduMap:id/tv_notip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12660884',
        },
        {
          matches:
            '[text="需开启系统定位服务开关"] +2 [id="com.baidu.BaiduMap:id/ll_dialog_btn"] > [id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12660883',
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
      name: '打车界面-弹窗广告',
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
      name: '升级更新弹窗',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
      snapshotUrls: 'https://i.gkd.li/import/12909385',
    },
  ],
});
