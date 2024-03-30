import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  deprecatedKeys: [0],
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
          key: 1,
          name: '更新弹窗-1',
          matches:
            '@[id="com.autonavi.minimap:id/iv_close"] + * > [text^="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13379094',
        },
        {
          key: 2,
          name: '更新弹窗-2',
          matches: '@[text="取消"] + * + [text="去下载"]',
          snapshotUrls: 'https://i.gkd.li/i/13379426',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-截屏分享',
      desc: '关闭截屏时app弹出的分享弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '[text="分享截图至"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13473388',
    },
    {
      key: 10,
      name: '局部广告-首页上方消息提醒',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
      snapshotUrls: 'https://i.gkd.li/i/12642830',
    },
    {
      key: 11,
      name: '局部广告-首页签到卡片',
      desc: '点击"x"',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'ImageView[visibleToUser=true][width<90][height<90] < @ViewGroup -(2) ViewGroup > ViewGroup > View[text*="签到"||text*="成长值"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12642842',
        'https://i.gkd.li/i/12642845',
        'https://i.gkd.li/i/12818770', // 限定 ImageView[visibleToUser=true]，防止控件不可见时触发规则
        'https://i.gkd.li/i/13764540', // 限定 ImageView[width<90][height<90]，避免在此误触
      ],
    },
    {
      key: 12,
      name: '全屏广告-加油页面优惠券弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '@ImageView < [desc="关闭"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text="立即领取"]',
      snapshotUrls: ['https://i.gkd.li/i/12642857'],
    },
    {
      key: 13,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'ViewGroup > ViewGroup > [desc="关闭"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/071a07d2-c760-4f15-9359-f54bf51b6205',
          snapshotUrls: 'https://i.gkd.li/i/14715295',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '[欢迎]弹窗',
          quickFind: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView + View[text!=null] <<n [vid="fragment_container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9',
          snapshotUrls: 'https://i.gkd.li/i/14800704',
        },
        {
          key: 1,
          name: '签到弹窗',
          quickFind: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: '[vid="main_map_msg_dialog_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e059109b-f4bb-4ed6-81a8-6010b51ebfd5',
          snapshotUrls: 'https://i.gkd.li/i/14809993',
        },
      ],
    },
  ],
});
