import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maidu.gkld',
  name: '公考雷达',
  groups: [
    {
      key: 2,
      name: '局部广告-首页右侧悬浮广告',
      rules: [
        {
          activityIds: 'com.maidu.gkld.ui.main.MainActivity',
          matches:
            '[id="com.maidu.gkld:id/fl_float"] + [id="com.maidu.gkld:id/close_image_view"]',
          snapshotUrls: 'https://i.gkd.li/i/12715291',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.maidu.gkld:id/ll_open_app_notice"] + [id="com.maidu.gkld:id/iv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12715250',
        },
      ],
    },
  ],
});
