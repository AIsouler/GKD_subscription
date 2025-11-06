import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video.pad',
  name: '爱奇艺PAD',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          activityIds: 'org.qiyi.android.video.MainActivity',
          matches: '@[clickable=true] >2 [text="关闭"]',
          exampleUrls: [
            'https://e.gkd.li/e731c9e7-b93e-4d3f-ae6c-887554b27d5a',
            'https://e.gkd.li/7a74687a-f576-4820-9ef8-3e10ddb67562',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23381997',
            'https://i.gkd.li/i/23382047',
          ],
        },
      ],
    },
  ],
});
