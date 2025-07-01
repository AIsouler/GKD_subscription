import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pcs.knowing_weather',
  name: '知天气',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="btn_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/68883ff3-cc5a-46a1-9258-bfeff208dbee',
          snapshotUrls: 'https://i.gkd.li/i/19832565',
        },
      ],
    },
  ],
});
