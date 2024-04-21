import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.gsui',
  name: '滴滴车主',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-弹窗广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.sdu.didi.gsui.main.MainActivity',
          matches: '[id="com.sdu.didi.gsui:id/main_dialog_banner_image_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13958887',
        },
      ],
    },
  ],
});
