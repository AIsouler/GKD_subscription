import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk.samsung',
  name: '百度网盘-三星版本',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e88a7ab4-0aeb-4472-a49b-3252da21ae33',
          snapshotUrls: 'https://i.gkd.li/i/12738323',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/7f1babd6-7da3-4733-aca9-80ddf3c0a84e',
          snapshotUrls: 'https://i.gkd.li/i/14596658',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[id="com.baidu.netdisk.samsung:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12738331',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[id="com.baidu.netdisk.samsung:id/buy_product_root"] > [id="com.baidu.netdisk.samsung:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12738388',
        },
        {
          key: 1,
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            'View[childCount=2] > @TextView[text=""][clickable=true] + TextView[text="专属福利"][clickable=false]',
          snapshotUrls: 'https://i.gkd.li/i/12738404',
        },
        {
          key: 2,
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '@TextView[text=""][clickable=true] - TextView[text="去使用"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12738449',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.baidu.netdisk.ui.transfer.TransferListTabActivity',
          matches:
            '[vid="close_probationary_guide_layout"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ab41b402-c4d0-439a-96f3-23029434aec4',
          snapshotUrls: 'https://i.gkd.li/i/16423129',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.baidu.netdisk.ui.transfer.TransferListTabActivity',
          matches: '[vid="youa_guide_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ab41b402-c4d0-439a-96f3-23029434aec4',
          snapshotUrls: 'https://i.gkd.li/i/16423129',
        },
      ],
    },
    {
      key: 5,
      name: '评价提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="view_score_style"] > [text="以后再说"]',
          exampleUrls:
            'https://m.gkd.li/57941037/167a8392-23c8-4e84-a55f-4f91e7e560d8',
          snapshotUrls: 'https://i.gkd.li/i/14893286',
        },
      ],
    },
    {
      key: 6,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="dialog_cancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/06ae328b-f852-407b-83ab-ec295d41baa4',
          snapshotUrls: 'https://i.gkd.li/i/14893280',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-[上新【专辑】功能]弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.baidu.netdisk.filealbum.ui.activity.FileAlbumListActivity',
          matches: '[vid="add_widget_dialog_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/256b5cad-a5ad-48e3-ba72-9c84447f2cac',
          snapshotUrls: 'https://i.gkd.li/i/14893285',
        },
      ],
    },
  ],
});
