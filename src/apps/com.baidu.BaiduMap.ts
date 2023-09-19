import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: [
        '@TextView[text^=`跳过`] + TextView[text=`广告`]',
        'ImageView[clickable=false] + TextView[text^="跳过"][clickable=true]', // 1689423368140
      ],
    },
    {
      key: 1,
      name: '地图上方黄页横幅',
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[id="com.baidu.BaiduMap:id/yellow_banner_close"][desc="关闭"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642301',
    },
    {
      key: 2,
      name: '打车界面-右侧悬浮球',
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642307',
    },
    {
      enable: false,
      key: 3,
      name: '美食大礼包弹窗',
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642310',
    },
    {
      enable: false,
      key: 4,
      name: '酒店提前订弹窗',
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[id="lottie_box"] + TextView[id=null][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642319',
    },
    {
      enable: false,
      key: 5,
      name: '请求定位弹窗',
      activityIds: ['com.baidu.mapframework.widget.BMBaseDialog'],
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
      ],
    },
  ],
});
