import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
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
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/983cc392-1b01-4172-bc1d-2df001baeb3d',
          snapshotUrls: 'https://i.gkd.li/i/16490985',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: [
            '[text="版本升级" || id="com.autonavi.minimap:id/update_viewpager"][visibleToUser=true]',
            '[text="取消" || id="com.autonavi.minimap:id/iv_close"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13379094',
            'https://i.gkd.li/i/13379426',
            'https://i.gkd.li/i/21981032',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-截屏分享',
      desc: '关闭截屏时app弹出的分享弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            '[text="分享截图至"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView <<n [id="com.autonavi.minimap:id/fragment_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13473388',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-首页上方消息提醒',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: [
        {
          key: 1,
          matches:
            'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
          snapshotUrls: 'https://i.gkd.li/i/12642830',
          exampleUrls: 'https://e.gkd.li/a7f72c58-0b31-4b87-9839-567d4d74350a',
        },
        {
          key: 2,
          fastQuery: true,
          matches: '@ImageView[clickable=true] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/17426322',
          exampleUrls: 'https://e.gkd.li/ca2dae5b-10d8-458e-9d83-fe04652ff074',
        },
      ],
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
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'ViewGroup[desc="图片"][childCount=2] > ViewGroup[clickable=true] > @ImageView[childCount=0] <<n [vid="tab_container_id"]',
          exampleUrls: 'https://e.gkd.li/132266f7-b7b8-4cac-9549-bcbe4314c893',
          snapshotUrls: 'https://i.gkd.li/i/16960367',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            '@ImageView[childCount=0] < ViewGroup[clickable=true] -2 * > View[text^="高德购票" && text$="优惠"] <<n [vid="mapInteractiveRelativeLayout"]',
          exampleUrls: 'https://e.gkd.li/59408741-4847-4395-ace5-b1e14ee24cec',
          snapshotUrls: 'https://i.gkd.li/i/16960157',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            '@[clickable=true] > [visibleToUser=true][text="关闭"] <<n [vid="ajx_view_container"]',
          exampleUrls: 'https://e.gkd.li/018aa83b-3f0a-46b4-b084-a5e7a397ca68',
          snapshotUrls: 'https://i.gkd.li/i/18627401',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '[欢迎]弹窗',
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView[clickable=true] + View[text!=null] <<n [vid="fragment_container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9',
          snapshotUrls: [
            'https://i.gkd.li/i/14800704',
            'https://i.gkd.li/i/17079025', // add @ImageView[clickable=true]避免在此误触
          ],
        },
        {
          key: 1,
          name: '签到弹窗',
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: '[vid="main_map_msg_dialog_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e059109b-f4bb-4ed6-81a8-6010b51ebfd5',
          snapshotUrls: 'https://i.gkd.li/i/14809993',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            '@ViewGroup[clickable=true] > View[visibleToUser=true][text^="关闭"] <<n [vid="mapInteractiveRelativeLayout"]',
          exampleUrls: 'https://e.gkd.li/0a4e847f-b1b0-4667-982a-43f313305139',
          snapshotUrls: 'https://i.gkd.li/i/22287641',
        },
      ],
    },
    {
      key: 15,
      name: '功能类-一键点亮角落',
      desc: '点击[一键点亮]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            '[text="一键点亮"] <2 @[clickable=true] <<n [vid="mapInteractiveRelativeLayout"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1fd33208-e81d-4da6-a23c-4d562a8e0ae0',
          snapshotUrls: 'https://i.gkd.li/i/14881505',
        },
      ],
    },
    {
      key: 16,
      name: '权限提示-授权蓝牙',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: '@ImageView[clickable=true] -2 [text="授权蓝牙"]',
          exampleUrls: 'https://e.gkd.li/8aef9184-d2b6-4c49-b729-82e6e76decdc',
          snapshotUrls: 'https://i.gkd.li/i/17002003',
        },
      ],
    },
  ],
});
