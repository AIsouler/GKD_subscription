import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '百青藤广告',
          actionMaximum: 1,
          quickFind: true,
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12598507',
        },
        {
          key: 1,
          name: '字节广告',
          actionMaximumKey: 0,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12597925',
        },
      ],
    },
    {
      key: 2,
      name: '软件升级提醒',
      activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
      quickFind: true,
      rules: [
        {
          matches:
            '[id="com.baidu.youavideo:id/tv_upgrade"] < LinearLayout +2 [id="com.baidu.youavideo:id/img_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12597916'],
        },
      ],
    },
    {
      key: 3,
      name: '悬浮窗',
      desc: '关闭广告悬浮窗',
      activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
      quickFind: true,
      rules: [
        {
          matches: '[id="com.baidu.youavideo:id/img_operation_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12970088'],
        },
      ],
    },
    {
      key: 4,
      name: '评价',
      desc: '点击下次再说',
      activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
      quickFind: true,
      rules: [
        {
          matches: '[id="com.baidu.youavideo:id/tv_next_time"]',
          snapshotUrls: ['https://i.gkd.li/import/12970094'],
        },
      ],
    },
    {
      key: 5,
      name: '会员充值提示',
      desc: '点击x关闭充值提示',
      activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
      quickFind: true,
      rules: [
        {
          matches:
            '[id="com.baidu.youavideo:id/tv_confirm_pay"] -5 [id="com.baidu.youavideo:id/img_close_dialog"]',
          snapshotUrls: ['https://i.gkd.li/import/12970094'],
        },
      ],
    },
    {
      key: 6,
      name: '弹窗广告',
      desc: '点击x关闭广告提示',
      activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
      quickFind: true,
      rules: [
        {
          matches:
            '[id="com.baidu.youavideo:id/dialog_home_pop_close_button"] ',
          snapshotUrls: ['https://i.gkd.li/import/13048700'],
        },
      ],
    },
    {
      key: 7,
      name: '请求开启通知权限弹窗',
      activityIds: 'com.baidu.youavideo.app.ui.HomeActivity',
      quickFind: true,
      rules:
        '[id="com.baidu.youavideo:id/dialog_open_guide_notification_root"] > [id="com.baidu.youavideo:id/img_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13413819',
    },
  ],
});
