import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.himovie',
  name: '华为视频',
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
          key: 0,
          fastQuery: true,
          matches: '[vid="hiad_skip_text"]',
          snapshotUrls: 'https://i.gkd.li/i/15523945',
        },
        {
          key: 1,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ec00ceef-3930-4240-92f5-56816fc90be2',
          snapshotUrls: 'https://i.gkd.li/i/20745477',
        },
      ],
    },
  ],
});
