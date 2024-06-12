import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    {
      key: 2,
      name: '更新提示-软件升级提醒',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches:
            '[id="com.baidu.youavideo:id/tv_upgrade"] < LinearLayout +2 [id="com.baidu.youavideo:id/img_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12597916'],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮窗广告',
      desc: '关闭广告悬浮窗',
      activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
      quickFind: true,
      rules: [
        {
          matches: '[id="com.baidu.youavideo:id/img_operation_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12970088'],
        },
      ],
    },
    {
      key: 4,
      name: '评价提示',
      desc: '点击下次再说',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.baidu.youavideo:id/tv_next_time"]',
          snapshotUrls: ['https://i.gkd.li/i/12970094'],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-会员充值提示',
      desc: '点击x关闭充值提示',
      activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
      quickFind: true,
      rules: [
        {
          matches:
            '[id="com.baidu.youavideo:id/tv_confirm_pay"] -5 [id="com.baidu.youavideo:id/img_close_dialog"]',
          snapshotUrls: ['https://i.gkd.li/i/12970094'],
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击x关闭广告提示',
      quickFind: true,
      activityIds: [
        'com.baidu.youavideo.home.view.HomeActivity',
        'com.baidu.youavideo.preview.ui.hometimeline.TimelinePreviewActivity',
        'com.baidu.youavideo.preview.ui.search.SearchPreviewActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.baidu.youavideo:id/dialog_home_pop_close_button"]',
          snapshotUrls: ['https://i.gkd.li/i/13048700'],
        },
        {
          key: 1,
          matches: '[id="com.baidu.youavideo:id/iv_close"]',
          excludeMatches: '[vid="tv_title"][text$="权限"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3aa0e107-e31f-4e5a-8969-1fcd8310281d',
          snapshotUrls: [
            'https://i.gkd.li/i/14133595',
            'https://i.gkd.li/i/14217352',
            'https://i.gkd.li/i/15750684', // 排除权限申请弹窗的规则触发
          ],
        },
      ],
    },
    {
      key: 7,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '[id="com.baidu.youavideo:id/dialog_open_guide_notification_root"] > [id="com.baidu.youavideo:id/img_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13413819',
    },
    {
      key: 8,
      name: '局部广告-照片页底部浮窗广告',
      activityIds: 'com.baidu.youavideo.home.view.HomeActivity',
      quickFind: true,
      rules:
        '[id="com.baidu.youavideo:id/cl_root"] + [id="com.baidu.youavideo:id/img_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13711475',
    },
    {
      key: 9,
      name: '局部广告-卡片广告',
      quickFind: true,
      rules: '[vid="riv_banner"] < * > [vid="iv_close"][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/13874124',
        'https://i.gkd.li/i/15220559', // 避免误触
      ],
    },
  ],
});
