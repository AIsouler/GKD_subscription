import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.baidu.youavideo.app.ui.SplashActivity'],
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"||text="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12597925',
            'https://gkd-kit.gitee.io/import/12598507',
          ],
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
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12597916'],
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
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12970088'],
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
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12970094'],
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
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12970094'],
        },
      ],
    },
  ],
});
