import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.didi.live.spring',
  name: '小红帽',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.qennnsad.aknkaksd.presentation.ui.MainContainerActivity',
          matches: '[vid="dialog_hall_iv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/0d0a2a0a-b9de-4f30-9e25-a0e3b3c111d6',
          snapshotUrls: 'https://i.gkd.li/i/14341955',
        },
      ],
    },
  ],
});
