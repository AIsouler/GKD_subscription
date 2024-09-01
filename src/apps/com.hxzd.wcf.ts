import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hxzd.wcf',
  name: '五寸方',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: ['com.hxzd.wcf.ui.MainActivity', '.ui.SplashActivity'],
          matches: '[vid="btn_close"]',
          exampleUrls: 'https://e.gkd.li/be986139-cdbd-4dc7-a52f-6cb1e1a8061c',
          snapshotUrls: [
            'https://i.gkd.li/i/14155547',
            'https://i.gkd.li/i/16828682',
          ],
        },
      ],
    },
  ],
});
