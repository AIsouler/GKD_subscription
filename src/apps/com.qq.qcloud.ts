import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.qcloud',
  name: '腾讯微云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.WeiyunRootActivity',
          matches: '@LinearLayout -(1,2) [text="互动广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19752123',
            'https://i.gkd.li/i/19752144',
          ],
        },
      ],
    },
  ],
});
