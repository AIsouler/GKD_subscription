import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jxj',
  name: '京粉',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jd.jxj.modules.main.SlidingTabActivity',
          matches: '[vid="popup_close_imgid"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ac5a04ef-3199-4ae5-8863-ea365b5efbab',
          snapshotUrls: 'https://i.gkd.li/i/15369226',
        },
      ],
    },
  ],
});
