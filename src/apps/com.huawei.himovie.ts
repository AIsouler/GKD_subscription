import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.himovie',
  name: '华为视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="hiad_skip_text"]',
          snapshotUrls: 'https://i.gkd.li/i/15523945',
        },
      ],
    },
  ],
});
