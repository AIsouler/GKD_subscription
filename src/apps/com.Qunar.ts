import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.Qunar',
  name: '去哪儿旅行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      ignoreGlobalGroupMatch: true,
      rules: [
        {
          fastQuery: true,
          matches:
            '@[text^="关闭"][visibleToUser=true] - RelativeLayout > [vid="mery_splash_ad_resource"]',
          exampleUrls: 'https://e.gkd.li/e5b86f58-2938-4e00-ae5b-cefe05135582',
          snapshotUrls: 'https://i.gkd.li/i/23180019',
        },
      ],
    },
  ],
});
