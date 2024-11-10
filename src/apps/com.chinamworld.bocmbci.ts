import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.bocmbci',
  name: '中国银行',
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
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          matches: '@[desc="关闭"] > [vid="btn_action"]',
          exampleUrls: 'https://e.gkd.li/988dbaff-68b3-499a-8736-a6e5b3364ed9',
          snapshotUrls: 'https://i.gkd.li/i/17691747',
        },
      ],
    },
  ],
});
