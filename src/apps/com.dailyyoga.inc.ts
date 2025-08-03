import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dailyyoga.inc',
  name: '每日瑜伽',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.session.fragment.UploadSessionResultActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3395e6cc-6776-4c86-ac6d-4411faced360',
          snapshotUrls: 'https://i.gkd.li/i/21563972',
        },
      ],
    },
  ],
});
