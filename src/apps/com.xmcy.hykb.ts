import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xmcy.hykb',
  name: '好游快爆',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '@[id="com.xmcy.hykb:id/iv_inner_button_close"] - RelativeLayout >n [id="com.xmcy.hykb:id/text_update_tip"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12870604',
        'https://i.gkd.li/i/13297450',
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      activityIds: 'com.xmcy.hykb.app.ui.main.MainActivity',
      rules: '[id="com.xmcy.hykb:id/dialog_home_notice_image_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13259427',
    },
  ],
});
