import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.main.MainActivity',
          matches: '[id="com.icbc:id/tv_time"][text*="跳过"][text.length<=6]',
          snapshotUrls: 'https://i.gkd.li/i/13330431',
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.web.ICBCWebView',
          matches: '[text="下次再说"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/85e48265-4269-4122-a70f-5361698954c0',
          snapshotUrls: 'https://i.gkd.li/i/18296892',
        },
      ],
    },
  ],
});
