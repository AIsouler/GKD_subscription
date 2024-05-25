import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.banshenghuo.mobile.ofdm',
  name: 'OmoFun',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[vid="anythink_myoffer_btn_close_id"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7fce3088-53c6-41e0-8b22-67acc1934984',
          snapshotUrls: 'https://i.gkd.li/i/15443189',
        },
      ],
    },
  ],
});
