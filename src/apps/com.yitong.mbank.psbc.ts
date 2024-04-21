import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yitong.mbank.psbc',
  name: '邮储银行',
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
          matches: 'Button[id="com.yitong.mbank.psbc:id/bt_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12685350',
            'https://i.gkd.li/i/13695462',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules:
        '[id="com.yitong.mbank.psbc:id/iv_theme"] + [id="com.yitong.mbank.psbc:id/iv_theme_close_btn"]',
      snapshotUrls: 'https://i.gkd.li/i/12755516',
    },
    {
      key: 3,
      name: '局部广告-首页-浮窗广告',
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules: '[id="com.yitong.mbank.psbc:id/img_close_float_window"]',
      snapshotUrls: 'https://i.gkd.li/i/13797314',
    },
  ],
});
